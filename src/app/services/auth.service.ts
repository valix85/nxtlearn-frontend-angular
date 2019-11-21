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
  constructor(private http: HttpClient, private router: Router) {
    this.setSession();
  }

  login(user: string, pwd: string): Observable<Auth> {
    this.error = null;
    // const fd = new FormData();
    // fd.append('utente', user);
    // fd.append('pwd', pwd);
    const params = new HttpParams()
      .set('utente', user)
      .set('pwd', pwd);
    const headers = new HttpHeaders()
      .set('Content-type', 'application/x-www-form-urlencoded')
      .set('authorization', 'Basic ' + btoa(user + ':' + pwd) );
    return this.http.post<Auth>(
      env.url + '/login',
      params,
      {
        headers,
        withCredentials: true
      }
      )
       .pipe(
         map(risp => {
           console.log(risp);
           const utente: Auth = new Auth();
           utente.username = risp.username;
           utente.expireSession = risp.expireSession;
           utente.basicAuth = 'Basic ' + btoa(user + ':' + pwd);
           localStorage.setItem('nxtLogged', JSON.stringify(utente));
           this.data = utente;
           // console.log('utente salvato', utente);
           return utente;
         })
       );
  }

  logout() {
    this.destroySession()
    /*
    .pipe(map(err => {
      console.log(err);
      return err;
    }))
    */
    /*
    .pipe(
      map( err => {
        console.log('aaaaaa', err);
        return err;
  }))
  */
    .subscribe(
      ok => {
        console.log('logout ok', ok);
        this.cleanLocalData();
        this.router.navigateByUrl('login');
      },
      err1 => {
        console.error('errore di logout', err1);
        this.cleanLocalData();
        this.router.navigateByUrl('login');
      }
    )
  }

  setSession() {
    if (localStorage.getItem('nxtLogged') != null) {
      this.data = JSON.parse(localStorage.getItem('nxtLogged'));
    }
  }

  destroySession() {
    return this.http.get(env.url + '/logout');
  }

  cleanLocalData() {
    this.data = null;
    localStorage.removeItem('nxtLogged');
  }

  getAuth() {
    if (this.isLogged()) {
      const tmp: Auth = JSON.parse(localStorage.getItem('nxtLogged'));
      return tmp.basicAuth;
    }
  }

  isLogged() {
      let isAuth = this.data && this.data != null ? true : false;
      if (isAuth) {
        // controllo che non sia scaduto
        if (new Date().getTime() > this.data.expireSession) {
          isAuth = false;
          this.cleanLocalData();
        }
      }
      return isAuth;
  }
}
