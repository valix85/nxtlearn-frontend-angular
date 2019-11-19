import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'nxt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  doLogin(form: NgForm): void {
    console.log('finire login', form);
    let data = new FormData();
    if (form.valid) {
      data.append('utente', form.form.value.utente);
      data.append('pwd', form.form.value.pwd);
      //console.log(data);
      this.http.post(env.url + '/login', data).subscribe(
        (risp) => {
          console.log('UTENTE LOGGATO');
          this.router.navigate(['/']);
        },
        (err) => {
          alert('Credenziali non valide');
          console.error(err);
        }
      );
    }
  }// end doLogin

}
