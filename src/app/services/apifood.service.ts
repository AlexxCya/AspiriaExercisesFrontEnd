import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {ResponseApi} from '../models/responseApi';
import {Food} from '../models/food';

const httpOption  = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class ApifoodService {
  url: string ='https://localhost:44341/api/Food';
  constructor(
    private _http : HttpClient
  ) { }

getFoods(dayOrder: number, hour: string): Observable<ResponseApi>{
    return this._http.get<ResponseApi>(this.url + '?DayOrder=' + dayOrder + '&Hour=' + hour );
}

}