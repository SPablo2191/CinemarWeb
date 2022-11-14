import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  { path: '', component: PrivateComponent },
  { path: 'rooms', loadChildren: () => import('./components/movie-rooms/movie-rooms.module').then(m => m.MovieRoomsModule) },
  { path: 'reservations', loadChildren: () => import('./components/reservations/reservations.module').then(m => m.ReservationsModule) },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
