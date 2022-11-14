import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoomsRoutingModule } from './movie-rooms-routing.module';
import { MovieRoomsComponent } from './movie-rooms.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    MovieRoomsComponent
  ],
  imports: [
    CommonModule,
    MovieRoomsRoutingModule,
    ComponentsModule
  ]
})
export class MovieRoomsModule { }
