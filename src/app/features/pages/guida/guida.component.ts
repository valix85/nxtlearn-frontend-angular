import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GuidaService } from 'src/app/services/guida.service';
import { Guida } from 'src/app/core/model/guida';
import { PermissionType } from 'src/app/features/permission/myPpermissionType';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'nxt-guida',
  templateUrl: './guida.component.html',
  styleUrls: ['./guida.component.scss']
})
export class GuidaComponent implements OnInit, OnChanges {

  @Input() value: Guida;

  guida: Guida;
  isCollapsed: boolean[] = [];

  p = PermissionType;

  constructor(public authService: AuthService, public router: Router, private route: ActivatedRoute, private guidaService: GuidaService ) { }

  iscritto: boolean = false;

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
        this.isIscritto(this.guida.id);
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
      risp => {
        this.guida = risp;
        // console.log(risp);
        this.isIscritto(this.guida.id); },
      err => { console.error('ERRORE'); alert(err); }
    );
  }

  beforeChange(evento: Event): void {
    console.log('accordion', evento);
  }

  iscriviti(idG: number): void {
    console.log('iscriviti id: ', idG);
    this.guidaService.iscriviUtente(idG)
    .subscribe(
      risp => {
        this.iscritto = true;
        alert('Iscrizione effettuata con successo, buona lettura!');
      }
      );
  }

  isIscritto(id: number) {
    this.guidaService.isIscritto(id)
    .subscribe(
      risp => this.iscritto = true,
      err => this.iscritto = false
    );
  }

}
