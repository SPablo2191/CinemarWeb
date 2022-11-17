import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { editCrud } from 'src/app/core/classes/editCrud.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [FormBuilder],
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends editCrud implements OnInit {

  constructor(protected fb: FormBuilder) {
    super();
   }

  ngOnInit(): void {
    this.createForm();
  }
  override createForm() {
    this.formGroup = this.fb.group({
      username: [null],
    });
  }

}
