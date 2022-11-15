import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoomsRoutingModule } from './movie-rooms-routing.module';
import { MovieRoomsComponent } from './movie-rooms.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RoomsCRUDTableComponent } from './components/rooms-crudtable/rooms-crudtable.component';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    MovieRoomsComponent,
    RoomsCRUDTableComponent
  ],
  imports: [
    CommonModule,
    MovieRoomsRoutingModule,
    ComponentsModule,
    TableModule,
    ToolbarModule,
    ButtonModule
  ]
})
export class MovieRoomsModule { }
