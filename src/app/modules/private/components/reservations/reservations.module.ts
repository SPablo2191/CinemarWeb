import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReservationCRUDTableComponent } from './components/reservation-crudtable/reservation-crudtable.component';
import { PrimeNgImportsModule } from 'src/app/prime-ng-imports/prime-ng-imports.module';


@NgModule({
  declarations: [
    ReservationsComponent,
    ReservationCRUDTableComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ComponentsModule,
    PrimeNgImportsModule
  ]
})
export class ReservationsModule { }
