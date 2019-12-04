import { Component, OnInit, Input } from '@angular/core';
import { Guida } from 'src/app/core/model/guida';
import { Livello } from 'src/app/core/model/livello';

@Component({
  selector: 'nxt-guida-card',
  templateUrl: './guida-card.component.html',
  styleUrls: ['./guida-card.component.scss']
})
export class GuidaCardComponent implements OnInit {


  @Input() item: Guida;

  constructor() { }

  ngOnInit() {
  }

}
