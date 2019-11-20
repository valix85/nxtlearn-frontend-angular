import { Injectable } from '@angular/core';
import {environment as env } from './../../environments/environment';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth } from '../core/model/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data: Auth;
  error: any;
  constructor(private http: HttpClient, private router: Router) { }

  login(user: string, pwd: string) {
    this.error = null;

    const fd = new FormData();
    fd.append('utente', user);
    fd.append('pwd', pwd);

    const params = new HttpParams();
    params
      .set('utente', user)
      .set('pwd', pwd);

    const headers = new HttpHeaders()
      .set('Content-type', 'application/form-data')
      .set('authorization', 'Basic ' + btoa(user + ':' + pwd) );

    return this.http.post<Observable<Auth>>(
      env.url + '/login',
      fd/*,

      {
        headers,
        withCredentials: true
      }*/
      )
       .pipe(
         map(risp => {
           const utente: Auth = new Auth();
           utente.username = user;
           utente.basicAuth = 'Basic ' + btoa(user + ':' + pwd);
           localStorage.setItem('nxtLogged', JSON.stringify(utente));
           return utente;
         })
       );
  }

  logout() {
    this.data = null;
    this.router.navigateByUrl('login');
  }
  setSession() {}
  destroySession() {}

  isLogged() {
    const isAuth = this.data && this.data != null ? true : false;
    return isAuth;
  }
}
