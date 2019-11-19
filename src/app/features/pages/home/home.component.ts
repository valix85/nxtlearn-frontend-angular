import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livello } from 'src/app/core/model/livello';
import { livelli } from 'src/app/core/model/mock/livelli.mock';


@Component({
  selector: 'nxt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'nxtlearn';
  levels: Livello[];

  livelloAttivo: Livello = {
    id: 2,
    difficolta: 2,
    descrizione: 'medio'
  };

  constructor(private router: Router) {
    // durante la creazione
    console.log('costruttore di HomeComponent');
  }

  ngOnInit() {
    // appena dopo che viene istanziato
    console.log('OnInit di HomeComponent');
    this.levels = livelli;
    console.info('Livelli: ', this.levels);
  }

}
