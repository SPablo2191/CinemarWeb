import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription,map } from 'rxjs';
import { Column } from 'src/app/core/models/Column';
import { BaseService } from 'src/app/project/services/base.service';

@Component({
  selector: 'app-ui-select-item-table',
  templateUrl: './ui-select-item-table.component.html',
  styleUrls: ['./ui-select-item-table.component.css']
})
export class UiSelectItemTableComponent implements OnInit,OnDestroy {
  cols : Column [] = this.config.data.cols;
  api : BaseService = this.config.data.api;
  items! : any[];
  subscriptions$ : Subscription = new Subscription();
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.getItems();
  }
  getItems(){
     this.subscriptions$ = this.api.get().pipe(
      map((items) =>{
        this.items = items;
      })
    ).subscribe();
  }

}
