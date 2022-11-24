import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription,map } from 'rxjs';
import { Movie, RootObject } from 'src/app/project/models/Movies';
import { MoviesService } from 'src/app/project/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  items! : Movie [];
  subscriptions : Subscription = new Subscription();
  loading : boolean = true;
  constructor(private moviesService : MoviesService) { }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(){
    this.subscriptions = this.moviesService.get().pipe(
      map((items)=>{
        this.items = items;
        this.loading = false;
      })
    ).subscribe();
  }

}
