import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';
import { ShowsCrudTableComponent } from './components/shows-crud-table/shows-crud-table.component';
import { PrimeNgImportsModule } from 'src/app/prime-ng-imports/prime-ng-imports.module';
import { ShowsEditCrudDialogComponent } from './components/shows-edit-crud-dialog/shows-edit-crud-dialog.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShowsComponent,
    ShowsCrudTableComponent,
    ShowsEditCrudDialogComponent
  ],
  imports: [
    CommonModule,
    ShowsRoutingModule,
    PrimeNgImportsModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class ShowsModule { }
