import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../enums/pathname.enum';
import { Movie } from '../models/Movies';
import { Room } from '../models/Rooms';
import { Show } from '../models/Shows';
import { BaseService } from './base.service';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root',
})
export class ShowsService extends BaseService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.shows}`;
  constructor(httpClient: HttpClient, private movieService : MoviesService) {
    super(httpClient);
  }
  override get(): Observable<any[]> {
    return this.httpClient.get<Show[]>(this.serverUrl).pipe(
      map((result) => {
        console.log(result);
        let shows: Show[] = [];
        result.forEach((element: any) => {
          shows.push({
            sala: { idSala: element[1], nombre: element[10],tipoSala : element[9]} as Room,
            pelicula : {title : element[7]} as Movie,
            fechaFuncion : element[3],
            cantidadButacasDisponibles : element[5]
          } as Show);
        });
        return shows;
      })
    );
  }
}
