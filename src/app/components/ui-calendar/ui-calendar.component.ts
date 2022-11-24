import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ui-calendar',
  templateUrl: './ui-calendar.component.html',
  styleUrls: ['./ui-calendar.component.css']
})
export class UiCalendarComponent implements OnInit {
  @Input() group!: FormGroup;
  @Input() name! : string;
  @Input() date : Date = new Date();
  @Input() placeholder : string = '';
  @Output() value = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(){
    this.value.emit(this.group.controls[this.name].value);
  }
}
