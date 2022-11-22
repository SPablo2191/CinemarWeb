import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { crud } from 'src/app/core/classes/crud.class';

@Component({
  selector: 'app-shows-crud-table',
  providers : [DialogService],
  templateUrl: './shows-crud-table.component.html',
  styleUrls: ['./shows-crud-table.component.css']
})
export class ShowsCrudTableComponent extends crud implements OnInit {
  items!: any[];
  constructor( dialogService : DialogService) {
    super(dialogService);
   }

  ngOnInit(): void {
  }

}
