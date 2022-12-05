import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { filter, map, Subscription } from 'rxjs';
import { UiSelectItemTableComponent } from 'src/app/components/ui-select-item-table/ui-select-item-table.component';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Column } from 'src/app/core/models/Column';
import { Movie } from 'src/app/project/models/Movies';
import { Room, roomType } from 'src/app/project/models/Rooms';
import { Show } from 'src/app/project/models/Shows';
import { MoviesService } from 'src/app/project/services/movies.service';
import { RoomsService } from 'src/app/project/services/rooms.service';
import { ShowsService } from 'src/app/project/services/shows.service';

@Component({
  selector: 'app-shows-edit-crud-dialog',
  providers: [DialogService, DynamicDialogRef],
  templateUrl: './shows-edit-crud-dialog.component.html',
  styleUrls: ['./shows-edit-crud-dialog.component.css'],
})
export class ShowsEditCrudDialogComponent
  extends abstractForm
  implements OnInit, OnDestroy
{
  ref!: DynamicDialogRef;
  data: Show = this.config.data;
  subsiscriptions$: Subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
    private roomService: RoomsService,
    public config: DynamicDialogConfig,
    private movieService: MoviesService,
    private showService : ShowsService,
    messageService: MessageService
  ) {
    super(messageService);
  }
  ngOnDestroy(): void {
    this.subsiscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.createForm();
    if (this.data.sala) {
      console.log(`hola ${this.data.sala}`);

      this.formGroup.controls['sala'].setValue(this.data.sala.nombre);
      this.formGroup.controls['tipoSala'].setValue(
        this.data.sala.tipoSala.nombre
      );
      this.formGroup.controls['pelicula'].setValue(this.data.pelicula.title);
      this.formGroup.controls['fechaFuncion'].setValue(this.data.fechaFuncion);
    }
  }

  getRoom() {
    let cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'cantidadButacas', header: 'Cantidad' },
    ];
    this.ref = this.dialogService.open(UiSelectItemTableComponent, {
      header: 'Añadir sala',
      data: { cols: cols, items: this.roomService.get() },
    });
    this.subsiscriptions$ = this.ref.onClose
      .pipe(
        filter((response) => !!response),
        map((response: Room) => {
          console.log(response);
          this.formGroup.controls['sala'].setValue(response.nombre);
          this.formGroup.controls['tipoSala'].setValue(
            response.tipoSala.nombre
          );
          this.data.sala = response;
        })
      )
      .subscribe();
  }

  getMovie() {
    let cols = [{ field: 'title', header: 'Titulo' }];
    this.ref = this.dialogService.open(UiSelectItemTableComponent, {
      header: 'Añadir pelicula',
      data: { cols: cols, items: this.movieService.get() },
    });
    this.subsiscriptions$ = this.ref.onClose
      .pipe(
        filter((response) => !!response),
        map((response: Movie) => {
          console.log(response);
          this.formGroup.controls['pelicula'].setValue(response.title);
          this.data.pelicula = response;
        })
      )
      .subscribe();
  }
  override createForm() {
    this.formGroup = this.fb.group({
      pelicula: [null],
      sala: [null],
      tipoSala: [],
      fechaFuncion: [],
    });
  }
  override submit(): void {
    this.data.fechaFuncion = this.formGroup.controls['fechaFuncion'].value;
    this.showService.post(this.data).subscribe();
  }
}
