import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import {ResponseApi} from '../models/responseApi';
import {Toy} from '../models/toy';

const httpOption  = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
};


@Injectable({
  providedIn: 'root'
})
export class ApitoyService {

  url: string ='https://localhost:44341/api/Toy';
  constructor(
    private _http : HttpClient
  ) { }

getToys(): Observable<ResponseApi>{
    return this._http.get<ResponseApi>(this.url);
}
add(toy: Toy): Observable<ResponseApi>{
  return this._http.post<ResponseApi>(this.url,toy, httpOption);
}

edit(toy: Toy, Id: number): Observable<ResponseApi>{
  return this._http.put<ResponseApi>(this.url + '?Id=' + Id,toy, httpOption);
}

delete(id: number): Observable<ResponseApi>{
  return this._http.delete<ResponseApi>(`${this.url}/${id}`);
}
}
