import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment as env } from './../../environments/environment';
import { Guida } from '../core/model/guida';

@Injectable({
  providedIn: 'root'
})
export class GuidaService {

  constructor(private http: HttpClient) { }

  get(id) {
    return this.http.get<Guida>(env.apiUrl + '/guida/' + id);
  }

  getAll() {
    return this.http.get<Guida[]>(env.apiUrl + '/guida/');
  }
}
