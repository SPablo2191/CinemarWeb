import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  items: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      routerLink: '/home'
    },
    {
      label: 'Peliculas',
      icon: 'bi bi-camera-reels-fill',
      routerLink: '/home'
      // items: [
      //   {
      //     label: 'Estrenos',
      //     icon: 'pi pi-megaphone',
      //   },
      //   {
      //     label: 'Todas las peliculas',
      //     icon: 'bi bi-camera-reels',
      //   },
      //   {
      //     label: 'Peliculas 2-D',
      //     icon: 'bi bi-camera-video-fill',
      //   },
      //   {
      //     label: 'Peliculas 3-D',
      //     icon: 'bi bi-badge-3d-fill'
      //   },
      // ],
    },
    {
      label: 'Mis Reservas',
      icon: 'pi pi-fw pi-calendar',
      routerLink:'/home/reservations'
    },
    {
      label: 'Funciones',
      icon: 'bi bi-calendar3',
      routerLink:'/home/reservations'
    },
    {
      label: 'Salas',
      icon: 'bi bi-plus-circle-fill',
      routerLink:'/home/rooms'
    },
    {
      label: 'Usuarios',
      icon: 'bi bi-people-fill',
      routerLink:'/home/rooms'
    },
    {
      label: 'Descuentos',
      icon:'bi bi-currency-dollar'
    }
  ];
  constructor() {}

  getItems(): Observable<MenuItem[]>{
    return of(this.items);
  }
}
