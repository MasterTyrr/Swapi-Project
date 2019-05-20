import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'https://swapi.co/api/films/'

@Injectable({
  providedIn: 'root'
})

export class Films {

  constructor(private _http: HttpClient) { }

  getAllFilms() {
    return this._http.get<any>(`${Api_Url}`, httpOptions);
  }
  getFilmsById(id) {
    return this._http.get<any>(`${Api_Url}${id}`, httpOptions);
  }
  
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}