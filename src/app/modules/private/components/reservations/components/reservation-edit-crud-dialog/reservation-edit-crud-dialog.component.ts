import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { filter, map, Subscription } from 'rxjs';
import { UiSelectItemTableComponent } from 'src/app/components/ui-select-item-table/ui-select-item-table.component';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Column } from 'src/app/core/models/Column';
import { Show } from 'src/app/project/models/Shows';
import { ShowsService } from 'src/app/project/services/shows.service';

@Component({
  selector: 'app-reservation-edit-crud-dialog',
  providers: [DialogService],
  templateUrl: './reservation-edit-crud-dialog.component.html',
  styleUrls: ['./reservation-edit-crud-dialog.component.css'],
})
export class ReservationEditCrudDialogComponent
  extends abstractForm
  implements OnInit
{
  ref!: DynamicDialogRef;
  fechaFuncion! : Date;
  subscriptions$: Subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
    private showService: ShowsService
  ) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
  }
  override createForm() {
    this.formGroup = this.fb.group({
      funcion: [],
      sala: [],
      tipoSala: [],
      fechaFuncion: [],
      horaFuncion: [],
      fechaRegistro: [],
      butaca: [],
    });
  }
  getShow() {
    let cols : Column[] = [
      { field: 'pelicula', subfield1: 'title', header: 'Pelicula' } as Column,
      { field: 'fechaFuncion',pipe : 'date', header: 'Fecha y Hora' } as Column,
    ];
    this.ref = this.dialogService.open(UiSelectItemTableComponent, {
      header: 'Seleccionar Función',
      data: { cols: cols, api: this.showService },
    });
    this.subscriptions$ = this.ref.onClose
      .pipe(
        filter((response)=> !!response),
        map((response: Show) => {
          console.log(response);
          this.formGroup.controls['funcion'].setValue(response.pelicula.title);
          this.formGroup.controls['sala'].setValue(response.sala.nombre);
          this.formGroup.controls['tipoSala'].setValue(response.sala.tipoSala.nombre);
          this.fechaFuncion = response.fechaFuncion;
        })
      )
      .subscribe();
  }
}
