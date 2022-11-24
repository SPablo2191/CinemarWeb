import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UiSelectItemTableComponent } from 'src/app/components/ui-select-item-table/ui-select-item-table.component';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Column } from 'src/app/core/models/Column';
import { MoviesService } from 'src/app/project/services/movies.service';
import { RoomsService } from 'src/app/project/services/rooms.service';

@Component({
  selector: 'app-shows-edit-crud-dialog',
  providers: [DialogService],
  templateUrl: './shows-edit-crud-dialog.component.html',
  styleUrls: ['./shows-edit-crud-dialog.component.css']
})
export class ShowsEditCrudDialogComponent extends abstractForm implements OnInit {
  ref! : DynamicDialogRef;
  constructor(private fb : FormBuilder,
    private dialogService : DialogService,
    private roomService : RoomsService,
    private movieService : MoviesService) {
    super();
   }

  ngOnInit(): void {
    this.createForm();
  }
  getRoom(){
    let cols = [
      {field : 'nombre',header :'Nombre'},
      {field : 'cantidadButacas', header : 'Cantidad'}
    ];
    this.ref = this.dialogService.open(UiSelectItemTableComponent,{
      data : {cols : cols,api : this.roomService}
    });
  }
  getMovie(){
    let cols = [
      {field : 'title',header :'Titulo'}
    ];
    this.ref = this.dialogService.open(UiSelectItemTableComponent,{
      data : {cols : cols,api : this.movieService}
    });
  }
  override createForm() {
    this.formGroup = this.fb.group({
      pelicula: [null],
      sala: [null],
      tipoSala : [],
      fechaFuncion: [],
    });
  }
}
