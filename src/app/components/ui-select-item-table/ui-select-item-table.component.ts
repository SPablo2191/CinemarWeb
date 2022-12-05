import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription, map, Observable } from 'rxjs';
import { Column } from 'src/app/core/models/Column';
import { BaseService } from 'src/app/project/services/base.service';

@Component({
  selector: 'app-ui-select-item-table',
  templateUrl: './ui-select-item-table.component.html',
  styleUrls: ['./ui-select-item-table.component.css'],
})
export class UiSelectItemTableComponent implements OnInit {
  cols: Column[] = this.config.data.cols;
  items: Observable<any[]> = this.config.data.items;
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {}
}
