import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from 'src/app/core/models/Session';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../enums/pathname.enum';
import { User } from '../models/Users';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.users}`;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  override post(data : any){
    return this.httpClient.post<Session>(this.serverUrl!,data);
  }
  register(data : User){
    let url = this.serverUrl+'/register'
    return this.httpClient.post(url,data);
  }
}
