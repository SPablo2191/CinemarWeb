import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ui-password-input',
  templateUrl: './ui-password-input.component.html',
  styleUrls: ['./ui-password-input.component.css']
})
export class UiPasswordInputComponent implements OnInit {
  @Input() group!: FormGroup;
  @Input() name!: string;
  @Input() label! : string;
  valid : boolean = false;
  constructor() { }
  

  ngOnInit(): void {
  }

}
