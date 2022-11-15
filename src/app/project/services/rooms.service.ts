import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/Rooms';
import { FatherService } from './father.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsService extends FatherService {

  constructor(private httpClient: HttpClient) {
    super();
  }
  getRooms(): Observable<Room[]>{
    let endpoint = '/rooms'
    return this.httpClient.get<Room[]>(this.serverUrl+endpoint);
  }
}
