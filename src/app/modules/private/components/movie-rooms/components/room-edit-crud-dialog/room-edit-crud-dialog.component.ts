import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { editCrud } from 'src/app/core/classes/editCrud.class';

@Component({
  selector: 'app-room-edit-crud-dialog',
  templateUrl: './room-edit-crud-dialog.component.html',
  providers: [FormBuilder],
  styleUrls: ['./room-edit-crud-dialog.component.css'],
})
export class RoomEditCrudDialogComponent extends editCrud implements OnInit {
  constructor(protected fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
  }

  override createForm() {
    this.formGroup = this.fb.group({
      name: [null],
      type: [null, Validators.required],
      seatQuantity: [null],
    });
  }
}
