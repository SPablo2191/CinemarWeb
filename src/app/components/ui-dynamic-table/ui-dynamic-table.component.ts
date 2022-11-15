import { Component, Input, OnInit } from '@angular/core';
import { Column } from 'src/app/core/models/Column';

@Component({
  selector: 'app-ui-dynamic-table',
  templateUrl: './ui-dynamic-table.component.html',
  styleUrls: ['./ui-dynamic-table.component.css'],
})
export class UiDynamicTableComponent implements OnInit {
  @Input() items!: any[];
  @Input() cols!: Column[];
  constructor() {}

  ngOnInit(): void {}
}
