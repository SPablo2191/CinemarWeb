import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { filter, map, Observable, Subscription } from 'rxjs';
import { UiSelectItemTableComponent } from 'src/app/components/ui-select-item-table/ui-select-item-table.component';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Column } from 'src/app/core/models/Column';
import { Seat } from 'src/app/project/models/Seats';
import { Show } from 'src/app/project/models/Shows';
import { RoomsService } from 'src/app/project/services/rooms.service';
import { ShowsService } from 'src/app/project/services/shows.service';

@Component({
  selector: 'app-reservation-edit-crud-dialog',
  templateUrl: './reservation-edit-crud-dialog.component.html',
  styleUrls: ['./reservation-edit-crud-dialog.component.css'],
})
export class ReservationEditCrudDialogComponent
  extends abstractForm
  implements OnInit
{
  ref!: DynamicDialogRef;
  fechaFuncion!: Date;
  seats$!: Observable<Seat[]>;
  selectedSeats: Seat[] = [];
  total: number = 0;
  precioSala!: number;
  subscriptions$: Subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
    private showService: ShowsService,
    private roomService: RoomsService,
    messageService: MessageService
  ) {
    super(messageService);
  }

  ngOnInit(): void {
    this.createForm();
  }
  override createForm() {
    this.formGroup = this.fb.group({
      funcion: [],
      sala: [],
      // tipoSala: [],
      fechaFuncion: [],
      horaFuncion: [],
      fechaRegistro: [],
      butaca: [this.selectedSeats],
    });
  }
  getShow() {
    let cols: Column[] = [
      { field: 'pelicula', subfield1: 'title', header: 'Pelicula' } as Column,
      { field: 'fechaFuncion', pipe: 'date', header: 'Fecha y Hora' } as Column,
    ];
    this.ref = this.dialogService.open(UiSelectItemTableComponent, {
      header: 'Seleccionar función',
      data: { cols: cols, items: this.showService.get() },
    });
    this.subscriptions$ = this.ref.onClose
      .pipe(
        filter((response) => !!response),
        map((response: Show) => {
          console.log(response.sala);
          this.formGroup.controls['funcion'].setValue(response.pelicula.title);
          this.formGroup.controls['sala'].setValue(response.sala.nombre);
          // this.formGroup.controls['tipoSala'].setValue(response.sala.tipoSala.nombre);
          this.fechaFuncion = response.fechaFuncion;
          this.precioSala = response.sala.precio;
          this.seats$ = this.showService.getSeats(response.idFuncion);
        })
      )
      .subscribe();
  }
  seleccionarButaca(seat: Seat) {
    if (!seat.disponible) {
      console.log('hola');
      return;
    }
    if (this.selectedSeats.includes(seat)) {
      console.log('holis');
      this.addMessageService(
        'warn',
        'Advertencia',
        'warn',
        'No puede seleccionar el mismo asiento 2 veces'
      );
      return;
    }
    this.selectedSeats.push(seat);
    this.total += this.precioSala;
    console.log(this.total);
  }
}
