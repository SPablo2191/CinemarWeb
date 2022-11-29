import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { abstractForm } from 'src/app/core/classes/abstract-form';

@Component({
  selector: 'app-reservation-edit-crud-dialog',
  templateUrl: './reservation-edit-crud-dialog.component.html',
  styleUrls: ['./reservation-edit-crud-dialog.component.css']
})
export class ReservationEditCrudDialogComponent extends abstractForm implements OnInit {

  constructor(private fb : FormBuilder) {
    super();
   }

  ngOnInit(): void {
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
