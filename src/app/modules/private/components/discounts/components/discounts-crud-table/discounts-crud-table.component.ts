import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { map, Observable } from 'rxjs';
import { crud } from 'src/app/core/classes/crud.class';
import { Discount } from 'src/app/project/models/Discounts';
import { DiscountsService } from 'src/app/project/services/discounts.service';
import { DiscountsEditCrudDialogComponent } from '../discounts-edit-crud-dialog/discounts-edit-crud-dialog.component';

@Component({
  selector: 'app-discounts-crud-table',
  providers : [DialogService],
  templateUrl: './discounts-crud-table.component.html',
  styleUrls: ['./discounts-crud-table.component.css']
})
export class DiscountsCrudTableComponent extends crud implements OnInit {
  items$! : Observable<Discount[]>;
  constructor( dialogService : DialogService, private discountService : DiscountsService) {
    super(dialogService);
   }

  ngOnInit(): void {
    this.get();
  }
  override get(): void {
    this.items$ = this.discountService.get();
  }
  override add(){
    this.getDialog(DiscountsEditCrudDialogComponent,'Nuevo Discuento');
    this.ref.onClose.pipe(
      map(response =>this.get())
    ).subscribe();
  }
}
