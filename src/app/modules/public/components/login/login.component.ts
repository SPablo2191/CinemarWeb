import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs';
import { abstractForm } from 'src/app/core/classes/abstract-form';
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
      tap(response=>{
        console.log(response);
        
      })
    ).subscribe();
    
  }
}
