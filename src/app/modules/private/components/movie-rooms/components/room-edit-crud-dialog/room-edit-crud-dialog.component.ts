import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { map, Observable, Subscription, tap } from 'rxjs';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Room, roomType } from 'src/app/project/models/Rooms';
import { Seat } from 'src/app/project/models/Seats';
import { RoomsService } from 'src/app/project/services/rooms.service';

@Component({
  selector: 'app-room-edit-crud-dialog',
  templateUrl: './room-edit-crud-dialog.component.html',
  providers: [FormBuilder],
  styleUrls: ['./room-edit-crud-dialog.component.css'],
})
export class RoomEditCrudDialogComponent
  extends abstractForm
  implements OnInit, OnDestroy
{
  room: Room = this.config.data;
  seats: Seat[] = [];
  roomTypes: roomType[] = [];
  subscriptions$: Subscription = new Subscription();
  constructor(
    protected fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    messageService: MessageService,
    protected roomService: RoomsService
  ) {
    super(messageService);
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.createForm();
    this.edit();
    this.getRoomTypes();
  }
  getRoomTypes() {
    this.roomService
      .getTypes()
      .pipe(
        tap((result) => console.log(result)),
        map((result) => {
          result.forEach((element) => {
            this.roomTypes.push({
              idTipoSala: element[0],
              nombre: element[1],
              valor: element[2],
            } as roomType);
          });
        })
      )
      .subscribe();
  }
  edit() {
    if (this.room == ({} as Room)) {
      return;
    }
    this.formGroup.patchValue(this.room);
  }
  override createForm() {
    this.formGroup = this.fb.group({
      nombre: [null],
      cantidadButacas: [null],
      tipoSala: [],
      butacas: [this.seats],
    });
  }
  private setSeatName(seats: Seat[]): Seat[] {
    let seatsOfRoom: Seat[] = [];
    seats.forEach((element: Seat) => {
      for (let index = 0; index < element.columna; index++) {
        seatsOfRoom.push({
          nombre: `Butaca ${element.fila}-${index + 1}`,
          fila: element.fila,
          columna: index + 1,
        } as Seat);
      }
    });
    return seatsOfRoom;
  }
  override submit(): void {
    let data: Room = {
      cantidadButacas: this.formGroup.controls['cantidadButacas'].value,
      nombre: this.formGroup.controls['nombre'].value,
      tipoSala : this.formGroup.controls['tipoSala'].value,
      butacas: this.setSeatName(this.formGroup.controls['butacas'].value),
    } as Room;
    console.log(data);
    this.subscriptions$ = this.roomService.post(data).pipe(
      map(response=>{
        this.ref.close();
      })
    ).subscribe();
  }
}
