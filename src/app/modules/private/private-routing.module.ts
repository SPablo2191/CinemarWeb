import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        title: 'Salas',
        path: 'rooms',
        loadChildren: () =>
          import('./components/movie-rooms/movie-rooms.module').then(
            (m) => m.MovieRoomsModule
          ),
      },
      {
        title: 'Mis Reservas',
        path: 'reservations',
        loadChildren: () =>
          import('./components/reservations/reservations.module').then(
            (m) => m.ReservationsModule
          ),
      },
      { title: 'Funciones', path: 'shows', loadChildren: () => import('./shows/shows.module').then(m => m.ShowsModule) },
      { title: 'Descuentos', path: 'discounts', loadChildren: () => import('./components/discounts/discounts.module').then(m => m.DiscountsModule) },
      {title: 'Usuarios', path: 'users', loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
