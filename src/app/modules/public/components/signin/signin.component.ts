import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { abstractForm } from 'src/app/core/classes/abstract-form';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent extends abstractForm implements OnInit {
  constructor(protected fb: FormBuilder, messageService : MessageService) {
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
    });
  }
}
