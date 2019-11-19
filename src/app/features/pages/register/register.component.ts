import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';

@Component({
  selector: 'nxt-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegistration = {
    nome: '',
    cognome: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

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
          (risp)=>{console.log(risp);}
          , (err)=>{
            alert(err.error.data);
            console.log(err);
          }
        )
    }
  }


}
