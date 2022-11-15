import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-crudtable',
  templateUrl: './rooms-crudtable.component.html',
  styleUrls: ['./rooms-crudtable.component.css']
})
export class RoomsCRUDTableComponent implements OnInit {
  @Input() items! : any []
  constructor() { }

  ngOnInit(): void {
  }

}
