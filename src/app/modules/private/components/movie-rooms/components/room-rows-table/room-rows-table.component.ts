import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Seat } from 'src/app/project/models/Seats';

@Component({
  selector: 'app-room-rows-table',
  templateUrl: './room-rows-table.component.html',
  styleUrls: ['./room-rows-table.component.css'],
})
export class RoomRowsTableComponent implements OnInit {
  total: number = 0;
  @Input() formGroup!: FormGroup;
  @Input() items: Seat[] = [];
  @Output() totalEmitter = new EventEmitter<number>();
  @Output() itemsChange = new EventEmitter<Seat[]>();
  fila: number = 1;
  constructor() {}

  ngOnInit(): void {}
  addRow() {
    this.items.push({ fila: this.fila } as Seat);
    this.fila++;
  }
  popRow() {
    console.log(this.items[this.items.length - 1]);
    if(this.total != 0){
      this.total -= this.items[this.items.length - 1].columna;
    }
    this.items.pop();
    this.fila--;
  }
  getTotal(quantity: string) {
    this.total += +quantity;
    this.totalEmitter.emit(this.total);
  }
}
