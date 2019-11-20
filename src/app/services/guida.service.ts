import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment as env } from './../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuidaService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  get(id) {

    const headers = new HttpHeaders()
      .set('authorization', this.authService.getAuth() );

    return this.http.get(env.apiUrl + '/guida/' + id,  {
        headers,
        withCredentials: true
      }
    );
  }
}
