import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../enums/pathname.enum';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class RoomsService extends BaseService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.movieRooms}`;
  constructor( httpClient: HttpClient) {
    super(httpClient);
  }
}
