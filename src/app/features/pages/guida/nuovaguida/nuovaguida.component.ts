import { Component, OnInit } from '@angular/core';
import { Guida } from 'src/app/core/model/guida';

@Component({
  selector: 'nxt-nuovaguida',
  templateUrl: './nuovaguida.component.html',
  styleUrls: ['./nuovaguida.component.scss']
})
export class NuovaguidaComponent implements OnInit {

  formCreaGuida: Guida = new Guida();

  constructor() { }

  ngOnInit() {
  }

}
