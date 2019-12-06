import { Injectable } from '@angular/core';
import { Capitolo } from '../core/model/capitolo';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapitoloService {
  capitolo: Capitolo = new Capitolo();
  constructor(private http: HttpClient, private router: Router) {
   }
   getAllCapitoliByGuidaId(id: number): Observable<Capitolo[]> {
     return this.http.get<Capitolo[]>(env.apiUrl + '/capitolo/guida/' + id);
   }
   aggiungiCapitolo(capitolo: Capitolo): Observable<Capitolo> {
    return this.http.post<Capitolo>(env.apiUrl + '/capitolo', capitolo, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

}