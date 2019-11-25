import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GuidaService } from 'src/app/services/guida.service';
import { Guida } from 'src/app/core/model/guida';

@Component({
  selector: 'nxt-guida',
  templateUrl: './guida.component.html',
  styleUrls: ['./guida.component.css']
})
export class GuidaComponent implements OnInit {

  guida: Guida;

  @Input() value: Guida;
  constructor(private router: Router, private route: ActivatedRoute, private guidaService: GuidaService ) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.scaricaDatiGuida(this.route.snapshot.paramMap.get('id'));
    } else if (this.value != null) {
      this.guida = this.value;
    }
  }

  scaricaDatiGuida(id: string) {
    this.guidaService.get(id).subscribe(
      risp => this.guida = risp,
      err => console.error('ERRORE')
    );
  }

}
