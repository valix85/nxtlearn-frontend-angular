import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GuidaService } from 'src/app/services/guida.service';
import { Guida } from 'src/app/core/model/guida';

@Component({
  selector: 'nxt-guida',
  templateUrl: './guida.component.html',
  styleUrls: ['./guida.component.css']
})
export class GuidaComponent implements OnInit, OnChanges {

  @Input() value: Guida;

  guida: Guida;

  constructor(private router: Router, private route: ActivatedRoute, private guidaService: GuidaService ) { }

  ngOnInit() {
    // fotografia dell'url statico, se cambio i parametri non si riaggiorna
    /*
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.scaricaDatiGuida(this.route.snapshot.paramMap.get('id'));
    } else if (this.value != null) {
      this.guida = this.value;
    }
    */
    this.route.params.subscribe(val => {
      // console.log('params change', val);
      if (val.id != null) {
        this.scaricaDatiGuida(val.id);
      } else if (this.value != null) {
        this.guida = this.value;
      }
    });

    this.route.url.subscribe(val => {
      // console.log('url change', val);
    });

    this.route.queryParams.subscribe(
      val => {
        // console.log('queryParams change', val); 
    }
    );
  }

  ngOnChanges(value) {
    // console.log('OnChanges detect: ', value);
  }

  scaricaDatiGuida(id: string) {
    this.guidaService.get(id).subscribe(
      risp => {this.guida = risp; console.log(risp); },
      err => { console.error('ERRORE'); alert(err); }
    );
  }

  beforeChange(evento: Event): void {
    console.log('accordion', evento);
  }

}
