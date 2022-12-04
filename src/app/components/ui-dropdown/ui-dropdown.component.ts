import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.css']
})
export class UiDropdownComponent implements OnInit {
  @Input() label!: string;
  @Input() optionLabel!: string;
  @Input() options : any[] = [];
  @Input() readOnly : boolean = false;
  @Input() placeholder: string = '';
  @Input() group!: FormGroup;
  @Input() errorMessage!: string;
  @Input() name!: string;
  @Input() type!: string;
  valid: boolean = false;
  @Output() value = new EventEmitter<string>();
  change: Subject<string> = new Subject<string>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.name);
  }
  onInput() {
    this.change.next(this.group.controls[this.name].value);
    this.value.emit(this.group.controls[this.name].value);
  }


}
