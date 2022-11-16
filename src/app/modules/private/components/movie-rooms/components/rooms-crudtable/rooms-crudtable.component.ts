import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { map, Subscription, tap } from 'rxjs';
import { crud } from 'src/app/core/classes/crud.class';
import { Room } from 'src/app/project/models/Rooms';
import { RoomsService } from 'src/app/project/services/rooms.service';
import { RoomEditCrudDialogComponent } from '../room-edit-crud-dialog/room-edit-crud-dialog.component';

@Component({
  selector: 'app-rooms-crudtable',
  templateUrl: './rooms-crudtable.component.html',
  providers: [DialogService, FormBuilder],
  styleUrls: ['./rooms-crudtable.component.css'],
})
export class RoomsCRUDTableComponent extends crud implements OnInit {
  items: Room[] = [];
  ref!: DynamicDialogRef;
  subscriptions$: Subscription = new Subscription();
  constructor(
    private roomsService: RoomsService,
    private dialogService: DialogService
  ) {
    super();
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.get();
  }
  override get() {
    this.subscriptions$ = this.roomsService
      .getRooms()
      .pipe(
        tap((res) => {
          console.log(res);
        }),
        map((rooms) => {
          this.items = rooms;
        })
      )
      .subscribe();
  }
  override add() {
    this.ref = this.dialogService.open(RoomEditCrudDialogComponent, {
      header: 'Nueva Sala',
      width: '70%',
    });
  }

  override edit(room: Room): void {
    throw new Error('Method not implemented.');
  }
  override delete(room: Room): void {
    throw new Error('Method not implemented.');
  }
}
