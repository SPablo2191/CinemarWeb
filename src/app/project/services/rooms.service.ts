import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../enums/pathname.enum';
import { Room, roomType } from '../models/Rooms';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class RoomsService extends BaseService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.movieRooms}`;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getTypes(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.serverUrl + '/type');
  }

  override get(): Observable<any[]> {
    return this.httpClient.get<Room[]>(this.serverUrl).pipe(
      map((result) => {
        console.log(result);
        let rooms: Room[] = [];
        result.forEach((element: any) => {
          rooms.push({
            idSala : element[0],
            nombre : element[2],
            fechaRegistro: element[3],
            cantidadButacas  : element[4],
            precio : element[5],
            tipoSala : {idTipoSala:element[7],nombre: element[8],valor: element[9]} as roomType
          } as Room);
        });
        return rooms;
      })
    );
  }
}
