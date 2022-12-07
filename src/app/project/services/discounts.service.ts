import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../enums/pathname.enum';
import { Discount } from '../models/Discounts';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DiscountsService extends BaseService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum. discounts}`;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  getDiscountOfDay(day : string){
    let url = this.serverUrl+'/days'
    let params = {day : day}
    return this.httpClient.get<Discount>(url,{params});
  }
}
