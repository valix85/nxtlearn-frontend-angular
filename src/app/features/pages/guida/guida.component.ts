import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GuidaService } from 'src/app/services/guida.service';

@Component({
  selector: 'nxt-guida',
  templateUrl: './guida.component.html',
  styleUrls: ['./guida.component.css']
})
export class GuidaComponent implements OnInit {

  guida = {};

  constructor(private router: Router, private route: ActivatedRoute, private guidaService: GuidaService ) { }

  ngOnInit() {
    this.scaricaDatiGuida(this.route.snapshot.paramMap.get('id'));
  }

  scaricaDatiGuida(id: string) {
    this.guidaService.get(id).subscribe(
      risp => this.guida = risp,
      err => console.error(err)
    );
  }

}
