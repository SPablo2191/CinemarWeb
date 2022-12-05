import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { map, Observable, Subscription, tap } from 'rxjs';
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
  items$!: Observable<Room[]>;
  subscriptions$: Subscription = new Subscription();
  constructor(
    private roomsService: RoomsService,
    dialogService: DialogService
  ) {
    super(dialogService);
  }

  ngOnInit(): void {
    this.get();
  }
  override get() {
    this.items$ = this.roomsService.get();
  }
  override add() {
    this.getDialog(RoomEditCrudDialogComponent, 'Nueva Sala');
    this.ref.onClose
      .pipe(
        map((response) => {
          this.get();
        })
      )
      .subscribe();
  }

  override edit(room: Room): void {
    this.getDialog(RoomEditCrudDialogComponent, room.nombre, room);
  }
  override delete(room: Room): void {
    throw new Error('Method not implemented.');
  }
}
