import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment as env } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GuidaService {

  constructor(private http: HttpClient) { }

  get(id) {
    return this.http.get(env.apiUrl + '/guida/' + id);
  }
}
