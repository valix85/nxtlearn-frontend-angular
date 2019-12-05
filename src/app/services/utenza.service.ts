import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { Lezione } from '../core/model/lezione';
import { User } from '../core/model/user';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtenzaService implements OnInit {
  relevantUser: User;
  users: User[] = [];
  constructor(private http: HttpClient, public authService: AuthService) {
    this.initUsers().then((utenti) => {
      this.relevantUser = this.emailToUser(this.authService.data.username);
      console.log('relevantUser is the logged user', this.relevantUser);
    });
  }
  ngOnInit() {
  }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(env.apiUrl + '/utenza/dto');
  }
  updatePwd(password: string, adminpwd: string): Observable<Boolean> {
    console.log('Changing pwd to user: ', this.relevantUser.email)
    return this.http.post<Boolean>(env.apiUrl + '/utenza/updatePwd', {
      email: this.relevantUser.email,
      password: password,
      adminpwd: adminpwd,
      adminmail: this.authService.data.username
    });
  }
  updateRole(role: string): Observable<Boolean> {
    // console.log('Changing role to user: ', this.relevantUser.email);
    return this.http.post<Boolean>(env.apiUrl + '/utenza/updateRole', {
      email: this.relevantUser.email,
      role: 'ROLE_' + role,
    });
  }
  updateGuides(toReplace: number[]) {
    return this.http.post(env.apiUrl + '/utenza/upGuideToUser', {
      email: this.relevantUser.email,
      guide: toReplace
    })
  }
  setRelevantUser(username: string) {
    // console.log('utenzaService: swapping user ', this.relevantUser, ' -> ', username);
    this.relevantUser = this.emailToUser(username);
    console.log('utenzaService: relevantUser changed in :', this.relevantUser);
  }
  emailToUser(email: string): User {
    var utente: User;
    var idx = this.users.findIndex(u => u.email === email);
    utente = this.users[idx];
    console.log('Email: ', email, ' is referred to ', utente);
    return utente;
  }

  // esempio di uso delle promise

  initUsers(): Promise<User[]> {
    var utenzaService = this;
    return new Promise<User[]>((resolve, reject) => {
      utenzaService.getAll().subscribe(
        risp => {
          console.log('utenzaService: initializing users with ', risp);
          utenzaService.users = risp;
          resolve(risp);
        },
        err => {
          console.error('Errors in users inizialization\n', err);
          reject('Error in users initialization');
        }
      );
    });
  }
}