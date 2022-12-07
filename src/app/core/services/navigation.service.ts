import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  items: MenuItem[] = [
    {
      label: 'Peliculas',
      icon: 'bi bi-camera-reels-fill',
      routerLink: '/home',
    },
    {
      label: 'Mis Reservas',
      icon: 'pi pi-fw pi-calendar',
      routerLink: '/home/reservations',
    },
    {
      label: 'Funciones',
      icon: 'bi bi-calendar3',
      routerLink: '/home/shows',
    },
    {
      label: 'Salas',
      icon: 'bi bi-plus-circle-fill',
      routerLink: '/home/rooms',
    },
    {
      label: 'Usuarios',
      icon: 'bi bi-people-fill',
      routerLink: '/home/users',
    },
    {
      label: 'Descuentos',
      icon: 'bi bi-currency-dollar',
      routerLink: '/home/discounts',
    },
    {
      label:'Cerrar Sesión',
      icon:'pi pi-fw pi-power-off',
      command(event?) {
        localStorage.clear();
        this.routerLink = '/login'
      },
    }
  ];
  constructor(private router : Router) {}

  getItems(): Observable<MenuItem[]> {
    if(localStorage.getItem('idTipoUsuario') != '1'){
      console.log(localStorage.getItem('idTipoUsuario'));
      
      this.items = [
        {
          label: 'Peliculas',
          icon: 'bi bi-camera-reels-fill',
          routerLink: '/home',
        },
        {
          label: 'Mis Reservas',
          icon: 'pi pi-fw pi-calendar',
          routerLink: '/home/reservations',
        },
        {
          label:'Cerrar Sesión',
          icon:'pi pi-fw pi-power-off',
          command(event?) {
            localStorage.clear();
            this.routerLink = '/login'
          },
        }
      ];
    }
    return of(this.items);
  }
  logout(){

  }
}
