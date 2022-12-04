import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { map, Subscription, tap } from 'rxjs';
import { crud } from 'src/app/core/classes/crud.class';
import { Room } from 'src/app/project/models/Rooms';
import { RoomsService } from 'src/app/project/services/rooms.service';
import { RoomEditCrudDialogComponent } from '../room-edit-crud-dialog/room-edit-crud-dialog.component';

@Component({
  selector: 'app-rooms-crudtable',
  templateUrl: './rooms-crudtable.component.html',
  providers: [DialogService, FormBuilder],
  styleUrls: ['./rooms-crudtable.component.css'],
})
export class RoomsCRUDTableComponent extends crud implements OnInit {
  items: Room[] = [];
  subscriptions$: Subscription = new Subscription();
  constructor(
    private roomsService: RoomsService,
    dialogService: DialogService
  ) {
    super(dialogService);
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.get();
  }
  override get() {
    this.subscriptions$ = this.roomsService
      .get()
      .pipe(
        tap((result)=> console.log(result)),
        map((result) => {
          result.forEach((element) => {
            this.items.push({
              idSala: element[0],
              tipoSala: element[1],
              nombre: element[2],
              fechaRegistro: element[3],
              cantidadButacas : element[4]
            } as Room);
          });
          console.log(this.items);
          
          // this.items = rooms;
        })
      )
      .subscribe();
  }
  override add() {
    this.getDialog(RoomEditCrudDialogComponent, 'Nueva Sala');
    this.ref.onClose.pipe(
      map(response=>{
        this.get();
      })
    ).subscribe();
  }

  override edit(room: Room): void {
    this.getDialog(RoomEditCrudDialogComponent, room.nombre , room);
  }
  override delete(room: Room): void {
    throw new Error('Method not implemented.');
  }
}
