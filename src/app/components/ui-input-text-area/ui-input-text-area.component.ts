import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ui-input-text-area',
  templateUrl: './ui-input-text-area.component.html',
  styleUrls: ['./ui-input-text-area.component.css']
})
export class UiInputTextAreaComponent implements OnInit {
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() group!: FormGroup;
  @Input() errorMessage!: string;
  @Input() name!: string;
  @Input() rows!: number;
  @Input() cols!: number;
  @Output() value = new EventEmitter<string>();
  valid: boolean = false;
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
