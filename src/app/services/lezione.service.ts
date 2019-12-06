import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment as env } from '../../environments/environment';
import { Lezione } from '../core/model/lezione';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LezioneService {
  constructor(private http: HttpClient) { }

  get(id: number, idc: number, idl: number) {
    return this.http.get<Lezione>(env.apiUrl + '/guida/' + id + '/capitolo/' + idc + '/lezione/' + idl);
  }

  getAllLezioniByCapitoloId(id: number): Observable<Lezione[]> {
    return this.http.get<Lezione[]>(env.apiUrl + '/lezione/lezione/capitolo/' + id);
  }

  aggiungiLezione(lezione: Lezione): Observable<Lezione> {
    return this.http.post<Lezione>(env.apiUrl + '/lezione/new', lezione, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
