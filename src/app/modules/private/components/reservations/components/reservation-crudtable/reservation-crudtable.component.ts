import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { map, Observable } from 'rxjs';
import { crud } from 'src/app/core/classes/crud.class';
import { Reservation } from 'src/app/project/models/Reservations';
import { ReservationsService } from 'src/app/project/services/reservations.service';
import { ReservationEditCrudDialogComponent } from '../reservation-edit-crud-dialog/reservation-edit-crud-dialog.component';

@Component({
  selector: 'app-reservation-crudtable',
  templateUrl: './reservation-crudtable.component.html',
  providers: [DialogService],
  styleUrls: ['./reservation-crudtable.component.css'],
})
export class ReservationCRUDTableComponent extends crud implements OnInit {
  items$!: Observable<Reservation[]>;
  constructor(dialogService: DialogService, private reservationService : ReservationsService) {
    super(dialogService);
  }

  ngOnInit(): void {
    this.get();
  }
  override add(){
    this.getDialog(ReservationEditCrudDialogComponent,'Nueva reservación');
    this.ref.onClose.pipe(
      map(response=>{
       this.get(); 
      })
    ).subscribe();
  }
  override get(): void {
    this.items$ = this.reservationService.get({id : localStorage.getItem('idUser')});
  }
}
