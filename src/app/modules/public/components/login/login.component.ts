import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Session } from 'src/app/core/models/Session';
import { User } from 'src/app/project/models/Users';
import { UsersService } from 'src/app/project/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [FormBuilder],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends abstractForm implements OnInit {
  constructor(
    protected fb: FormBuilder,
    protected router : Router,
    messageService: MessageService,
    private userService: UsersService
  ) {
    super(messageService);
  }

  ngOnInit(): void {
    this.createForm();
  }
  logCheck() {
    console.log();
  }
  override createForm() {
    this.formGroup = this.fb.group({
      username: [null],
      password: [],
    });
  }
  override submit(): void {
    let data : User = {} as User;
    data.nombreUsuario = this.formGroup.controls['username'].value;
    data.contrasena = this.formGroup.controls['password'].value;
    this.userService.post(data).pipe(
      tap((response : Session)=>{
        console.log(response);
        
        localStorage.setItem('access_token',response.token);
        localStorage.setItem('user',response.user);
        localStorage.setItem('idUser',response.idUser.toString());
        localStorage.setItem('idTipoUsuario',response.idTipoUsuario.toString());
        console.log(`Bienvenido ${localStorage.getItem('user')} - ${localStorage.getItem('idUser')}!`);
        
        this.router.navigate(['/home'])
      })
    ).subscribe();
    
  }
}
