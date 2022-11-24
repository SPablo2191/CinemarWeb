import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { crud } from 'src/app/core/classes/crud.class';
import { Reservation } from 'src/app/project/models/Reservations';
import { ReservationEditCrudDialogComponent } from '../reservation-edit-crud-dialog/reservation-edit-crud-dialog.component';

@Component({
  selector: 'app-reservation-crudtable',
  templateUrl: './reservation-crudtable.component.html',
  providers: [DialogService],
  styleUrls: ['./reservation-crudtable.component.css'],
})
export class ReservationCRUDTableComponent extends crud implements OnInit {
  items: Reservation[] = [];
  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit(): void {}
  override add(){
    this.getDialog(ReservationEditCrudDialogComponent,'nueva Reservación');
  }
}
