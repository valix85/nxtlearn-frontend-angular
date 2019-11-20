import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'nxt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  doLogin(form: NgForm): void {
    //console.log('finire login', form);
    //let data = new FormData();
    /*
    let params = new HttpParams();
    params
      .set('utente', form.form.value.utente)
      .set('pwd', form.form.value.pwd);

    let obj = {
      utente: form.form.value.utente,
      pwd: form.form.value.pwd
    };
    */

    //if (form.valid) {
      //data.append('utente', form.form.value.utente);
      //data.append('pwd', form.form.value.pwd);
      //console.log(data);
      //this.http.post(env.url + '/login', data
      /*, {headers: {
        'Content-Type' : 'application/form-data',
        withCredentials: 'true'
      },
      params: params
    }
    */
   //)

      this.authService.login(form.form.value.utente, form.form.value.pwd)
      .subscribe(
        (risp) => {
          console.log(risp);
          console.log('UTENTE LOGGATO');
          this.router.navigate(['/']);
        },
        (err) => {
          alert('Credenziali non valide');
          console.error(err);
        }
      );
  }// end doLogin

}
