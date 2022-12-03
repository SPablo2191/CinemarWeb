import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { abstractForm } from 'src/app/core/classes/abstract-form';

@Component({
  selector: 'app-discounts-edit-crud-dialog',
  templateUrl: './discounts-edit-crud-dialog.component.html',
  styleUrls: ['./discounts-edit-crud-dialog.component.css'],
})
export class DiscountsEditCrudDialogComponent
  extends abstractForm
  implements OnInit
{
  dias : any[] = [
    {'Dia' : 'Lunes'},
    {'Dia' : 'Martes'},
    {'Dia' : 'Miercoles'},
    {'Dia' : 'Jueves'},
    {'Dia' : 'Viernes'},
    {'Dia' : 'Sabado'},
    {'Dia' : 'Domingo'}
  ];
  constructor(messageService: MessageService, protected fb: FormBuilder) {
    super(messageService);
  }

  ngOnInit(): void {
    this.createForm();
  }
  override createForm() {
    this.formGroup = this.fb.group({
      descripcion: [null],
      dia: [null],
      porcentaje: []
    });
  }
}
