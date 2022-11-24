import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { abstractForm } from 'src/app/core/classes/abstract-form';

@Component({
  selector: 'app-shows-edit-crud-dialog',
  templateUrl: './shows-edit-crud-dialog.component.html',
  styleUrls: ['./shows-edit-crud-dialog.component.css']
})
export class ShowsEditCrudDialogComponent extends abstractForm implements OnInit {

  constructor(private fb : FormBuilder) {
    super();
   }

  ngOnInit(): void {
    this.createForm();
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
