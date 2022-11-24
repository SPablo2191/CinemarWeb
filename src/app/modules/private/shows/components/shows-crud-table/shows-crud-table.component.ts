import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription, map } from 'rxjs';
import { crud } from 'src/app/core/classes/crud.class';
import { Show } from 'src/app/project/models/Shows';
import { ShowsService } from 'src/app/project/services/shows.service';
import { ShowsEditCrudDialogComponent } from '../shows-edit-crud-dialog/shows-edit-crud-dialog.component';

@Component({
  selector: 'app-shows-crud-table',
  providers : [DialogService],
  templateUrl: './shows-crud-table.component.html',
  styleUrls: ['./shows-crud-table.component.css']
})
export class ShowsCrudTableComponent extends crud implements OnInit {
  items!: Show[];
  subscriptions$ = new Subscription();
  constructor( dialogService : DialogService, private showService : ShowsService) {
    super(dialogService);
   }

  ngOnInit(): void {
    this.getShows();
  }
  getShows(){
    this.subscriptions$ = this.showService.get().pipe(
      map((items : Show[])=>{
        this.items = items;
      })
    ).subscribe();
  }
  override add(){
    this.getDialog(ShowsEditCrudDialogComponent,'Nueva Función');
  }
  override edit(item : Show): void {
    console.log(item);
    this.getDialog(ShowsEditCrudDialogComponent,` ${item.pelicula.title}`,item);
  }

}
