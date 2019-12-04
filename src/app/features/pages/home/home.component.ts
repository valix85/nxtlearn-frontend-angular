import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livello } from 'src/app/core/model/livello';
import { livelli } from 'src/app/core/model/mock/livelli.mock';
import { GuidaService } from 'src/app/services/guida.service';
import { Guida } from 'src/app/core/model/guida';


@Component({
  selector: 'nxt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'nxtlearn';
  guide: Guida[] = [];

  

  constructor(private router: Router, private guidaService: GuidaService) {
    // durante la creazione
    console.log('costruttore di HomeComponent');
  }

  ngOnInit() {
    // appena dopo che viene istanziato
    console.log('OnInit di HomeComponent');
    /*
    // example navigate router
    this.router.navigate(
      ['pagina', '10', 'edit'],
      {queryParams: {param: 'value'}, fragment: 'anchor'}
    );
    */
    this.guidaService.getLatest()
      .subscribe(risp => this.guide = risp);
  } // end OnInit




  sel1: Guida;
  doIt(val: Guida) {
    console.log('val', val);
    this.sel1 = val;
    console.log('sel1', this.sel1);
  }

}
