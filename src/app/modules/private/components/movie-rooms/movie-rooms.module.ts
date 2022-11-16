import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';

import { MovieRoomsRoutingModule } from './movie-rooms-routing.module';
import { MovieRoomsComponent } from './movie-rooms.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RoomsCRUDTableComponent } from './components/rooms-crudtable/rooms-crudtable.component';
import { PrimeNgImportsModule } from 'src/app/prime-ng-imports/prime-ng-imports.module';
import { RoomEditCrudDialogComponent } from './components/room-edit-crud-dialog/room-edit-crud-dialog.component';
@NgModule({
  declarations: [
    MovieRoomsComponent,
    RoomsCRUDTableComponent,
    RoomEditCrudDialogComponent
  ],
  imports: [
    CommonModule,
    MovieRoomsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    PrimeNgImportsModule 
  ]
})
export class MovieRoomsModule { }
