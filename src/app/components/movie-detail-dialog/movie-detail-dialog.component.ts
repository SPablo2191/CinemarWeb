import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Column } from 'src/app/core/models/Column';
import { MovieDetailed } from 'src/app/project/models/Movies';

@Component({
  selector: 'app-movie-detail-dialog',
  templateUrl: './movie-detail-dialog.component.html',
  styleUrls: ['./movie-detail-dialog.component.css']
})
export class MovieDetailDialogComponent implements OnInit {
  movie : MovieDetailed = this.config.data.movie;
  cols : Column[] = [
    {field: 'sala',header:'Sala'},
    {field: 'hora',header:'Hora'},
    {field: 'hora',header:'Dia'}
  ];
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
  }

}
