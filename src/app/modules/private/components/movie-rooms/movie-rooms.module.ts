import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoomsRoutingModule } from './movie-rooms-routing.module';
import { MovieRoomsComponent } from './movie-rooms.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RoomsCRUDTableComponent } from './components/rooms-crudtable/rooms-crudtable.component';
import { PrimeNgImportsModule } from 'src/app/prime-ng-imports/prime-ng-imports.module';
@NgModule({
  declarations: [
    MovieRoomsComponent,
    RoomsCRUDTableComponent
  ],
  imports: [
    CommonModule,
    MovieRoomsRoutingModule,
    ComponentsModule,
    PrimeNgImportsModule 
  ]
})
export class MovieRoomsModule { }
