import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieRoomsComponent } from './movie-rooms.component';

const routes: Routes = [{ path: '', component: MovieRoomsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoomsRoutingModule { }
