import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../enums/pathname.enum';
import { MovieDetailed, RootObject } from '../models/Movies';
import { FatherService } from './father.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService extends FatherService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.movies}`;
  constructor(private httpClient: HttpClient) {
    super();
  }

  getMovies(): Observable<RootObject> {
    return this.httpClient.get<RootObject>(this.serverUrl);
  }
  getMovie(id: number): Observable<MovieDetailed> {
    let endpoint = this.serverUrl + `/${id}`;
    return this.httpClient.get<MovieDetailed>(endpoint);
  }
}
