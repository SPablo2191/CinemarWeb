import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ui-input-number',
  templateUrl: './ui-input-number.component.html',
  styleUrls: ['./ui-input-number.component.css']
})
export class UiInputNumberComponent implements OnInit {
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() prefix : string = '';
  @Input() suffix : string = '';
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
