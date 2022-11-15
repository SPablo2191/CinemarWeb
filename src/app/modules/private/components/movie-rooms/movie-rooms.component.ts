import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription,map } from 'rxjs';
import { Column } from 'src/app/core/models/Column';
import { Room } from 'src/app/project/models/Rooms';
import { RoomsService } from 'src/app/project/services/rooms.service';

@Component({
  selector: 'app-movie-rooms',
  templateUrl: './movie-rooms.component.html',
  styleUrls: ['./movie-rooms.component.css']
})
export class MovieRoomsComponent implements OnInit,OnDestroy {
  rooms : Room [] =[];
  subscriptions$ : Subscription = new Subscription();
  constructor(private roomsService : RoomsService) { }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.getRooms();
  }
  getRooms() {
    this.subscriptions$ = this.roomsService.getRooms().pipe(
      map((rooms)=>{
        this.rooms = rooms;
      })
    ).subscribe();
  }

}
