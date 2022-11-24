import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Room } from 'src/app/project/models/Rooms';
import { Seat } from 'src/app/project/models/Seats';

@Component({
  selector: 'app-room-edit-crud-dialog',
  templateUrl: './room-edit-crud-dialog.component.html',
  providers: [FormBuilder],
  styleUrls: ['./room-edit-crud-dialog.component.css'],
})
export class RoomEditCrudDialogComponent
  extends abstractForm
  implements OnInit
{
  room: Room = this.config.data;
  seats: Seat[] = [];
  constructor(
    protected fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
    this.edit();
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
      butacas: [this.seats],
    });
  }
}
