import { Component, OnInit, Input } from '@angular/core';
import { Guida } from 'src/app/core/model/guida';

@Component({
  selector: 'nxt-guida-card',
  templateUrl: './guida-card.component.html',
  styleUrls: ['./guida-card.component.css']
})
export class GuidaCardComponent implements OnInit {


  @Input() item: Guida;

  constructor() { }

  ngOnInit() {
  }

}
