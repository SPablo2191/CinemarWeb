import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { map, Subscription } from 'rxjs';
import { UiSelectItemTableComponent } from 'src/app/components/ui-select-item-table/ui-select-item-table.component';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Column } from 'src/app/core/models/Column';
import { Movie } from 'src/app/project/models/Movies';
import { Room } from 'src/app/project/models/Rooms';
import { Show } from 'src/app/project/models/Shows';
import { MoviesService } from 'src/app/project/services/movies.service';
import { RoomsService } from 'src/app/project/services/rooms.service';

@Component({
  selector: 'app-shows-edit-crud-dialog',
  providers: [DialogService,DynamicDialogRef],
  templateUrl: './shows-edit-crud-dialog.component.html',
  styleUrls: ['./shows-edit-crud-dialog.component.css']
})
export class ShowsEditCrudDialogComponent extends abstractForm implements OnInit,OnDestroy {
  ref! : DynamicDialogRef;
  data : Show = this.config.data;
  subsiscriptions$ : Subscription = new Subscription();
  currentDate = new Date()
  constructor(private fb : FormBuilder,
    private dialogService : DialogService,
    private roomService : RoomsService,
    public config: DynamicDialogConfig,
    private movieService : MoviesService) {
    super();
   }
  ngOnDestroy(): void {
    this.subsiscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.createForm();
    if(this.data.sala){
      console.log(`hola ${this.data.sala}`);
      
      this.formGroup.controls["sala"].setValue(this.data.sala.nombre);
      this.formGroup.controls["tipoSala"].setValue(this.data.sala.tipoSala.nombre);
      this.formGroup.controls["pelicula"].setValue(this.data.pelicula.title);
      this.formGroup.controls["fechaFuncion"].setValue(this.data.fechaFuncion);
    }
    
    
  }
  getRoom(){
    let cols = [
      {field : 'nombre',header :'Nombre'},
      {field : 'cantidadButacas', header : 'Cantidad'}
    ];
    this.ref = this.dialogService.open(UiSelectItemTableComponent,{
      header:'Añadir sala',
      data : {cols : cols,api : this.roomService}
    });
    this.subsiscriptions$ = this.ref.onClose.pipe(
      map((res : Room)=>{
        console.log(res);
        this.formGroup.controls["sala"].setValue(res.nombre);
        this.formGroup.controls["tipoSala"].setValue(res.tipoSala.nombre);
        
      })
    ).subscribe();
  }

  getMovie(){
    let cols = [
      {field : 'title',header :'Titulo'}
    ];
    this.ref = this.dialogService.open(UiSelectItemTableComponent,{
      header:'Añadir pelicula',
      data : {cols : cols,api : this.movieService}
    });
    this.subsiscriptions$ = this.ref.onClose.pipe(
      map((res : Movie)=>{
        console.log(res);
        this.formGroup.controls["pelicula"].setValue(res.title);
      })
    ).subscribe();
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
