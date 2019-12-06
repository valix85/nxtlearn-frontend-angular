import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Guida } from 'src/app/core/model/guida';
import { Livello } from 'src/app/core/model/livello';
import { livelli } from 'src/app/core/model/mock/livelli.mock';
import { LivelloService } from 'src/app/services/livello.service';
import { GuidaService } from 'src/app/services/guida.service';

@Component({
  selector: 'nxt-nuovaguida',
  templateUrl: './nuovaguida.component.html',
  styleUrls: ['./nuovaguida.component.scss']
})
export class NuovaguidaComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router, private livelloService: LivelloService, private guidaService: GuidaService) { }

  guida: Guida = new Guida();
  livello: Livello = new Livello();
  livelli: Livello[];
  ngOnInit() {
    // Carica i livelli
    this.livelloService.getLivelli().subscribe(
      risp => this.livelli = risp,
      err => console.log('ERRORE')
    );
    console.log(livelli);
  }
  doCreate(form: NgForm): void {
    // Crea una nuova guida
    console.log(form.form);
    if (form.valid) {
      this.guida.nome = form.form.value.nome;
      this.guida.descrizione = form.form.value.descrizione;
      this.guida.image = form.form.value.imagePath;
      this.livello.id = parseInt(form.form.value.livello, 10);
      for (let i = 0; i < livelli.length; i++) {
        if (this.livello.id === livelli[i].id) {
          this.guida.livello = this.livelli[i];
        }
      }

      this.guida.capitoli = [];
      console.log(this.guida);
      this.guidaService.aggiungiGuida(this.guida).subscribe(
        (risp) => {
          console.log(risp);
          alert('Registrata con successo');
          this.router.navigateByUrl('/');
        }
        , (err) => {
          alert(err.error.data);
          console.log(err);
        }
      );
    }
  }
  getNome() {
    return this.guida.nome;
  }
}