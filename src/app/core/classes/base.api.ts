/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { plainToClass } from 'class-transformer'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { MultipleRecordsResponse } from 'src/app/core/classes/multiple-records-response.class'
import { ApiEnum } from '../enums/api.enum'
import { BaseModel } from './base.model'

@Injectable()
export class BaseApi<TModel extends BaseModel> {
    url: string
    loaders: string
    modelClass: typeof BaseModel

    constructor(protected httpClient: HttpClient) {}

    public get(id: number): Observable<BaseModel> {
        const url = `${this.url}/${id}`
        return this.httpClient.get(url, { responseType: ApiEnum.ResponseTypeJson }).pipe(
            map((response: any) => plainToClass(this.modelClass, response.data)),
            catchError((error) => throwError(error))
        )
    }

    public list(start?: number, length?: number, query?: string): Observable<MultipleRecordsResponse> {
        const url = `${this.url}?start=${start ? start : '0'}${length ? '&length=' + length : ''}${query ? '&query=' + query : ''}`
        return this.baseList(url)
    }

    public insert(model: BaseModel): Observable<BaseModel> {
        const url = this.url
        const headers = new HttpHeaders().set(ApiEnum.ContentType, ApiEnum.ApplicationJson).set(ApiEnum.Charset, ApiEnum.Utf8)
        const body = JSON.stringify(model)

        return this.httpClient.post(url, body, { headers: headers }).pipe(
            map((response: any) => plainToClass(this.modelClass, response.data)),
            catchError((error) => throwError(error))
        )
    }

    public update(model: BaseModel): Observable<BaseModel> {
        const url = this.url
        const headers = new HttpHeaders().set(ApiEnum.ContentType, ApiEnum.ApplicationJson).set(ApiEnum.Charset, ApiEnum.Utf8)
        const body = JSON.stringify(model)

        return this.httpClient.put(url, body, { headers: headers }).pipe(
            map((response: any) => plainToClass(this.modelClass, response.data)),
            catchError((error) => throwError(error))
        )
    }

    public delete(id: number): Observable<BaseModel> {
        const url = `${this.url}/${id}`
        const headers = new HttpHeaders().set(ApiEnum.ContentType, ApiEnum.ApplicationJson).set(ApiEnum.Charset, ApiEnum.Utf8)

        return this.httpClient.delete(url, { headers: headers }).pipe(
            map((response: BaseModel) => response),
            catchError((error) => throwError(error))
        )
    }

    public deleteMultiple(ids: number[]): Observable<BaseModel> {
        let url = `${this.url}/multiple`

        ids.forEach((id) => {
            url += `ids=${id}&`
        })

        const headers = new HttpHeaders().set(ApiEnum.ContentType, ApiEnum.ApplicationJson).set(ApiEnum.Charset, ApiEnum.Utf8)

        return this.httpClient.delete(url, { headers: headers }).pipe(
            map((response: BaseModel) => response),
            catchError((error) => throwError(error))
        )
    }

    protected baseList(url: string): Observable<MultipleRecordsResponse> {
        return this.httpClient.get(url, { responseType: ApiEnum.ResponseTypeJson }).pipe(
            map((response: any) => {
                const records = new MultipleRecordsResponse()
                records.count = response.count
                records.start = response.start
                records.length = response.length
                records.data = Object.assign(plainToClass(this.modelClass, response.data))
                return records
            }),
            catchError((error) => throwError(error))
        )
    }
}
