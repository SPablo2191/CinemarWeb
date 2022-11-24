import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { abstractForm } from 'src/app/core/classes/abstract-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [FormBuilder],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends abstractForm implements OnInit {
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
