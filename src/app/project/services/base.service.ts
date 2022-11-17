import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class BaseService {
  // serverUrl: string ='https://cinemar-api.vercel.app';
   serverUrl : string | undefined
   constructor(protected httpClient: HttpClient){}
   get() : Observable<any []> {
    const url = `${this.serverUrl}`
    return this.httpClient.get<any []>(url);
  }
}
