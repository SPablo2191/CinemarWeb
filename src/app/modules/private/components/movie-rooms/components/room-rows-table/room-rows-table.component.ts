import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-rows-table',
  templateUrl: './room-rows-table.component.html',
  styleUrls: ['./room-rows-table.component.css']
})
export class RoomRowsTableComponent implements OnInit {
  total : number = 0;
  items! : any[];
  constructor() { }

  ngOnInit(): void {
  }

}
