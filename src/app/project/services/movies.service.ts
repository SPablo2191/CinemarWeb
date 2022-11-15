import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetailed, RootObject } from '../models/Movies';
import { FatherService } from './father.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService extends FatherService {
  
  constructor(private httpClient: HttpClient) {
    super();
  }
  
  getMovies(): Observable<RootObject> {
    let endpoint = '/movies'
    return this.httpClient.get<RootObject>(this.serverUrl+endpoint);
  }
  getMovie(id : number) : Observable<MovieDetailed>{
    let endpoint = `/movies/${id}`
    return this.httpClient.get<MovieDetailed>(this.serverUrl+endpoint);
  }
}
