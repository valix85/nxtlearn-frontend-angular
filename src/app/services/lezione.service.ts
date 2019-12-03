import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment as env } from '../../environments/environment';
import { Lezione } from '../core/model/lezione';
@Injectable({
  providedIn: 'root'
})
export class LezioneService {
  constructor(private http: HttpClient) { }
  get(id: number, idc: number, idl: number) {
    return this.http.get<Lezione>(env.apiUrl + '/guida/' + id + '/capitolo/' + idc + '/lezione/' + idl);
  }
}
