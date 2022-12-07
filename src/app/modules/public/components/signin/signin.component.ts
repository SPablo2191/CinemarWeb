import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { User } from 'src/app/project/models/Users';
import { UsersService } from 'src/app/project/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent extends abstractForm implements OnInit {
  constructor(
    protected fb: FormBuilder,
    messageService: MessageService,
    private router: Router,
    private userService: UsersService
  ) {
    super(messageService);
  }

  ngOnInit(): void {
    this.createForm();
  }
  override createForm() {
    this.formGroup = this.fb.group({
      nombre: [null],
      apellido: [null],
      correo: [null],
      fechaNac: [null],
      telefono: [null],
      nombreUsuario: [null],
      password: [],
      repPassword: [],
      DNI: [],
    });
  }
  override submit(): void {
    if (
      this.formGroup.controls['password'].value !=
        this.formGroup.controls['repPassword'].value ||
      this.formGroup.controls['nombre'].value == undefined ||
      this.formGroup.controls['nombreUsuario'].value == undefined
    ) {
      this.addMessageService(
        'warn',
        'Advertencia',
        'warn',
        'Debe completar todos los campos para poder registrarse'
      );
      return;
    }
    let data: User = {
      nombre: this.formGroup.controls['nombre'].value,
      apellido: this.formGroup.controls['apellido'].value,
      correo: this.formGroup.controls['correo'].value,
      fechaNacimiento: this.formGroup.controls['fechaNac'].value,
      telefono: this.formGroup.controls['telefono'].value,
      nombreUsuario: this.formGroup.controls['nombreUsuario'].value,
      contrasena: this.formGroup.controls['password'].value,
      DNI: this.formGroup.controls['DNI'].value,
    } as User;
    this.userService
      .register(data)
      .pipe(
        map((response) => {
          this.addMessageService(
            'success',
            'Exito',
            'success',
            '¡Usuario registrado con exito!'
          );
          this.router.navigate(['/login']);
        })
      )
      .subscribe();
  }
}
