import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment as env } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RuoloService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<string[]> {
    console.log('RuoloService.getAll()');
    return this.http.get<string[]>(env.apiUrl + '/utenza/roles');
  }
}
