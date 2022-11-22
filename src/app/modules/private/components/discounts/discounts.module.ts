import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountsRoutingModule } from './discounts-routing.module';
import { DiscountsComponent } from './discounts.component';
import { DiscountsCrudTableComponent } from './components/discounts-crud-table/discounts-crud-table.component';
import { PrimeNgImportsModule } from 'src/app/prime-ng-imports/prime-ng-imports.module';


@NgModule({
  declarations: [
    DiscountsComponent,
    DiscountsCrudTableComponent
  ],
  imports: [
    CommonModule,
    DiscountsRoutingModule,
    PrimeNgImportsModule
  ]
})
export class DiscountsModule { }
