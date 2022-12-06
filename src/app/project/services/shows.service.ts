import { NgIfContext } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../enums/pathname.enum';
import { Movie } from '../models/Movies';
import { Room } from '../models/Rooms';
import { Seat, seatOfShow } from '../models/Seats';
import { Show } from '../models/Shows';
import { BaseService } from './base.service';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root',
})
export class ShowsService extends BaseService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.shows}`;
  constructor(httpClient: HttpClient, private movieService: MoviesService) {
    super(httpClient);
  }
  override get(): Observable<any[]> {
    return this.httpClient.get<Show[]>(this.serverUrl).pipe(
      map((result) => {
        let shows: Show[] = [];
        console.log(result);  
        result.forEach((element: any) => {
          shows.push({
            idFuncion: element[0],
            sala: {
              idSala: element[1],
              nombre: element[10],
              tipoSala: element[9],
              precio : element[13]
            } as Room,
            pelicula: { title: element[7] } as Movie,
            fechaFuncion: element[3],
            cantidadButacasDisponibles: element[5],
          } as Show);
        });
        return shows;
      })
    );
  }
  getSeats(id: number): Observable<any[]> {
    let url = `${this.serverUrl}/seats`;
    let params = { id: id };
    return this.httpClient.get<seatOfShow>(url, { params }).pipe(
      map((response: seatOfShow) => {
        var matrixOfSeats: any[] = [];
        let seatsOfShow: Seat[] = [];
        let i = 0;
        let fila = response.seats[0][1];
        response.seats.forEach((element: any[]) => {
          // element.reduce(
          //   (silla, value)
          // )
          // console.log(`indice: ${i} length : ${response.length}`);
          

          if (fila == element[1]) {
            seatsOfShow.push({
              idButaca: element[0],
              fila: element[1],
              columna: element[2],
              nombre: element[3],
              disponible: element[4],
            } as Seat);
          } else {
            if (fila != element[1]) {
              matrixOfSeats.push(seatsOfShow);
              seatsOfShow = [];
              fila = element[1];
            }
            seatsOfShow.push({
              idButaca: element[0],
              fila: element[1],
              columna: element[2],
              nombre: element[3],
              disponible: element[4],
            } as Seat);
          }
          if (response.length-1 == i ) {
            matrixOfSeats.push(seatsOfShow);
          }
          i++;
        });
        // matrixOfSeats.push(seatsOfShow);

        return matrixOfSeats;
        // if (matrixOfSeats) {
        // } else {
        //   return [];
        // }
      })
    );
  }
}
