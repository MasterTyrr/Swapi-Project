import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'https://swapi.co/api/people/'

@Injectable({
  providedIn: 'root'
})

export class People {

  constructor(private _http: HttpClient) { }

  getAllPeople() {
    return (
      this._http.get<any>(`${Api_Url}?page=1`, httpOptions)
    );
  }

  getAllPeople2() {
    return this._http.get<any>(`${Api_Url}?page=2`, httpOptions)
  }
  getAllPeople3() {
    return this._http.get<any>(`${Api_Url}?page=3`, httpOptions)
  }
  getPeopleById(id) {
    return this._http.get<any>(`${Api_Url}${id}`, httpOptions);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}