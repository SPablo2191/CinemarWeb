import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Column } from 'src/app/core/models/Column';
import { User } from 'src/app/project/models/Users';
import { UsersService } from 'src/app/project/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  cols : Column [] = [
    {field : 'nombreUsuario', header : 'Usuario'} as Column,
    {field : 'nombre', header : 'Nombre'} as Column,
    {field : 'apellido', header : 'Apellido'} as Column,
    {field : 'DNI', header : 'DNI'} as Column,
    {field : 'fechaRegistro', header : 'Fecha de registro',pipe : 'date'} as Column,
  ];
  users : User [] = [];
  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.usersService.get().pipe(
      map((result : any[]) =>{
        result.forEach(element => {
          console.log(result);
          let aux : User = {} as User;
          aux.nombre = element[2];
          aux.apellido = element[10];
          aux.fechaNacimiento = element[3];
          aux.DNI = element[4];
          aux.nombreUsuario = element[5];
          aux.fechaRegistro = element[9];
          this.users.push(aux);
        });
      })
    ).subscribe();
  }

}
