import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';
import { ShowsCrudTableComponent } from './components/shows-crud-table/shows-crud-table.component';
import { PrimeNgImportsModule } from 'src/app/prime-ng-imports/prime-ng-imports.module';


@NgModule({
  declarations: [
    ShowsComponent,
    ShowsCrudTableComponent
  ],
  imports: [
    CommonModule,
    ShowsRoutingModule,
    PrimeNgImportsModule
  ]
})
export class ShowsModule { }
