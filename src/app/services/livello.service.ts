import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment as env } from '../../environments/environment';
import { Livello } from '../core/model/livello';

@Injectable({
  providedIn: 'root'
})
export class LivelloService {

  constructor(private http: HttpClient) { }

  getLivelli() {
    return this.http.get<Livello[]>(env.url + '/livello/all');
  }
}
