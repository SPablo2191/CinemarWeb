import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { crud } from 'src/app/core/classes/crud.class';

@Component({
  selector: 'app-discounts-crud-table',
  providers : [DialogService],
  templateUrl: './discounts-crud-table.component.html',
  styleUrls: ['./discounts-crud-table.component.css']
})
export class DiscountsCrudTableComponent extends crud implements OnInit {
  items! : any[];
  constructor( dialogService : DialogService) {
    super(dialogService);
   }

  ngOnInit(): void {
  }

}
