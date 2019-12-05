import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'nxt-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegistration = {
    nome: '',
    cognome: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  doRegister(form: NgForm): void {
    console.log('finire registrazione');
    if (form.valid) {
        this.formRegistration = form.form.value;
        console.log(this.formRegistration);
        this.http.post(env.apiUrl + '/register', this.formRegistration, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).subscribe(
          (risp) => {
            console.log(risp);
            alert('Registrato con successo');
            this.router.navigateByUrl('login');
          }
          , (err) => {
            alert(err.error.data);
            console.log(err);
          }
        );
    }
  }


}
