import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountsRoutingModule } from './discounts-routing.module';
import { DiscountsComponent } from './discounts.component';
import { DiscountsCrudTableComponent } from './components/discounts-crud-table/discounts-crud-table.component';
import { PrimeNgImportsModule } from 'src/app/prime-ng-imports/prime-ng-imports.module';
import { DiscountsEditCrudDialogComponent } from './components/discounts-edit-crud-dialog/discounts-edit-crud-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    DiscountsComponent,
    DiscountsCrudTableComponent,
    DiscountsEditCrudDialogComponent
  ],
  imports: [
    CommonModule,
    DiscountsRoutingModule,
    PrimeNgImportsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class DiscountsModule { }
