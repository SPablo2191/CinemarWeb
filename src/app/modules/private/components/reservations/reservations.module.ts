import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ComponentsModule
  ]
})
export class ReservationsModule { }
