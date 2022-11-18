import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { crud } from 'src/app/core/classes/crud.class';
import { Reservation } from 'src/app/project/models/Reservations';

@Component({
  selector: 'app-reservation-crudtable',
  templateUrl: './reservation-crudtable.component.html',
  providers : [DialogService],
  styleUrls: ['./reservation-crudtable.component.css'],
})
export class ReservationCRUDTableComponent extends crud implements OnInit {
  items: Reservation[] = [
    
  ];
  constructor(dialogService : DialogService) {
    super(dialogService);
  }

  ngOnInit(): void {}
}
