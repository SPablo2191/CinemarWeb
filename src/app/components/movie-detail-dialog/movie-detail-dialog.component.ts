import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription, map } from 'rxjs';
import { Column } from 'src/app/core/models/Column';
import { MovieDetailed } from 'src/app/project/models/Movies';
import { ShowsService } from 'src/app/project/services/shows.service';
import { Show } from 'src/app/project/models/Shows';
import { Room } from 'src/app/project/models/Rooms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-detail-dialog',
  templateUrl: './movie-detail-dialog.component.html',
  styleUrls: ['./movie-detail-dialog.component.css'],
})
export class MovieDetailDialogComponent implements OnInit,OnDestroy {
  movie: MovieDetailed = this.config.data.movie;
  shows : Show[] = [];
  subscriptions$ : Subscription = new Subscription();

  // cols : Column [] = [
  //   { field: 'sala', header: 'Sala' } as Column,
  //   { field: 'sala', header: 'Sala',subfield1:'tipoSala',subfield2: 'nombre' } as Column,
  //   { field: 'fechaFuncion', header: 'Fecha de Función',pipe:'date' } as Column,
  // ];
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private showService : ShowsService,
    private router : Router
  ) {}
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.getShows();
  }
  getShows() {
    this.subscriptions$ = this.showService.get().pipe(
      map((items : Show [])=>{
        console.log(items);
        this.shows = items;
      })
    ).subscribe();
  }
  reserve(){
    this.router.navigate(['/home/reservations']);
    this.ref.close();
  }
}
