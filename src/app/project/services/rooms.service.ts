import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../enums/pathname.enum';
import { Room } from '../models/Rooms';
import { FatherService } from './father.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsService extends FatherService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.movieRooms}`
  constructor(private httpClient: HttpClient) {
    super();
  }
  getRooms(): Observable<Room[]>{
    return this.httpClient.get<Room[]>(this.serverUrl);
  }
}
