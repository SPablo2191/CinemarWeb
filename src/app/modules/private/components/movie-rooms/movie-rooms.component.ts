import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map, tap } from 'rxjs';
import { Column } from 'src/app/core/models/Column';
import { Room } from 'src/app/project/models/Rooms';
import { RoomsService } from 'src/app/project/services/rooms.service';

@Component({
  selector: 'app-movie-rooms',
  templateUrl: './movie-rooms.component.html',
  styleUrls: ['./movie-rooms.component.css'],
})
export class MovieRoomsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
