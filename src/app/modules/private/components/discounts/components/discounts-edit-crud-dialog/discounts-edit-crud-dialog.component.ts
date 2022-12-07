import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { DiscountsService } from 'src/app/project/services/discounts.service';
import { Discount }  from 'src/app/project/models/Discounts'
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { map } from 'rxjs';
@Component({
  selector: 'app-discounts-edit-crud-dialog',
  templateUrl: './discounts-edit-crud-dialog.component.html',
  styleUrls: ['./discounts-edit-crud-dialog.component.css'],
})
export class DiscountsEditCrudDialogComponent
  extends abstractForm
  implements OnInit
{
  DiscountData : Discount = {} as Discount;
  dias: any[] = [
    { Dia: 'Lunes' },
    { Dia: 'Martes' },
    { Dia: 'Miercoles' },
    { Dia: 'Jueves' },
    { Dia: 'Viernes' },
    { Dia: 'Sabado' },
    { Dia: 'Domingo' },
  ];
  constructor(
    messageService: MessageService,
    protected fb: FormBuilder,
    public ref: DynamicDialogRef,
    private discountService: DiscountsService
  ) {
    super(messageService);
  }

  ngOnInit(): void {
    this.createForm();
  }
  override createForm() {
    this.formGroup = this.fb.group({
      descripcion: [null],
      dia: [null],
      porcentaje: [],
    });
  }
  override submit(): void {
    this.DiscountData.descripcion = this.formGroup.controls['descripcion'].value;
    this.DiscountData.dia = this.formGroup.controls['dia'].value['Dia'];
    this.DiscountData.porcentaje = this.formGroup.controls['porcentaje'].value/100;
    this.discountService.post(this.DiscountData).pipe
    (
      map((response : any)=>{
        this.ref.close();
      })
    ).subscribe(console.log);
  }
}
