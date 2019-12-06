import { Component, OnInit } from '@angular/core';
import { LezioneService } from 'src/app/services/lezione.service';
import { CapitoloService } from 'src/app/services/capitolo.service';
import { GuidaService } from 'src/app/services/guida.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Lezione } from 'src/app/core/model/lezione';
import { Capitolo } from 'src/app/core/model/capitolo';
import { Guida } from 'src/app/core/model/guida';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'nxt-nuovalezione',
  templateUrl: './nuovalezione.component.html',
  styleUrls: ['./nuovalezione.component.scss']
})
export class NuovalezioneComponent implements OnInit {

  constructor(
    private lezioneService: LezioneService,
    private guidaService: GuidaService,
    private capitoloService: CapitoloService,
    public authService: AuthService,
    private router: Router
    ) { }


  lezione: Lezione = new Lezione();
  capitoli: Capitolo[] = [];
  lezioni: Lezione[] = [];
  guide: Guida[];
  capitolo: Capitolo = new Capitolo();
  nuovaGuida: Guida = new Guida();
  // attivazione "assegna al capitolo"
  active = false;
  active2 = false;
  creaCapitolo = false;
  optioncrea = false;
  nomeCapitolo: string;
  idGuida: number;
  idCap: number;
  val: Guida;
  capitoloNuovo: Capitolo = new Capitolo();
  ngOnInit() {
    // Ottieni tutte le guide
    this.guidaService.getAll().subscribe(
      risp => {
        this.guide = risp;
        console.log(this.guide);
      },
      err => console.log('ERRORE')
    );
  }
  getcapitoli(guida: Guida): void {
    this.active = false;
    // attivazione lezione
    this.active2 = false;
    this.capitolo = undefined;
    this.creaCapitolo = false;
    this.capitoloService.getAllCapitoliByGuidaId(guida.id).subscribe(
      risp => {
        this.capitoli = risp;
      //  this.capitolo.nome = "";
        console.log(this.capitoli);
        this.nuovaGuida.capitoli = risp;
        console.log(this.nuovaGuida.capitoli);
        if (risp != null) {
          this.active = true;
        } else {
          this.active = false;
        }
      },
      err => console.error(err)
    );
  }
  getlezione(capitolo: Capitolo): void {
    if (capitolo.id != null) {
      this.lezioneService.getAllLezioniByCapitoloId(capitolo.id).subscribe(
        risp => {
          this.lezione.titolo = '';
          this.lezione.contenuto = '';
          this.lezioni = risp;
          // console.log('LEZIONI BY CAP');
          // console.log(this.lezioni);
          this.capitolo.lezioni = this.lezioni;
          this.lezione.autore = this.setAutore();
          // switch della view
          this.active2 = true;
          this.creaCapitolo = false;
        },
        err => console.error(err)
      );
    } else {
      // switch della view
      this.active2 = false;
      this.creaCapitolo = true;
    }
    this.capitoloNuovo.nome = '';
  }
  salvaCapitolo(form: NgForm) {
    console.log(form);
    console.log('Salva capitolo');
    this.capitoloNuovo.nome = form.form.value.cap;
    this.capitoloNuovo.lezioni = [];
    this.capitoloNuovo.ordineCapitolo = -1;
    this.capitoloNuovo.idGuida = this.val.id;
    this.capitoloService.aggiungiCapitolo(this.capitoloNuovo).subscribe(
      (risp) => {
        // console.log(risp);
        this.idCap = risp.id;
        alert('Registrato con successo');
        this.active2 = true;
      }
      , (err) => {
        alert(err.error.data);
        // console.log(err);
      }
    );
  }
  salvaLezione(form: NgForm) {
    this.lezione.autore = form.form.value.autore;
    this.lezione.contenuto = form.form.value.contenuto;
    this.lezione.titolo = form.form.value.titolo;
    if (this.idCap === undefined) {
      this.lezione.idCapitolo = this.capitolo.id;
    } else {
      this.lezione.idCapitolo = this.idCap;
    }
    this.lezione.ordineLezione = -1;
    console.log('lezione da inviare: ', this.lezione);
    this.lezioneService.aggiungiLezione(this.lezione).subscribe(
      (risp) => {
        console.log(risp);
        alert('Registrata con successo');
      }
      , (err) => {
        alert(err.error.data);
        console.log(err);
      }
    );
  }
  setAutore() {
    return this.authService.data.nome + ' ' + this.authService.data.cognome;
  }
  leggiGuide(): void {
    this.guidaService.getAll();
  }
  setGuida(guidaPresodaHTML: Guida) {
    // console.log(val1)
    this.val = guidaPresodaHTML;
    console.log(this.val);
    this.getcapitoli(guidaPresodaHTML);
  }
  setCapitolo(capitoloPresodaHTML: Capitolo) {
    console.log(capitoloPresodaHTML);
    this.capitolo = capitoloPresodaHTML;
    console.log('CAPITOLO SCELTO', this.capitolo);
    // controllo per capire se è nuovo o già esistente
    this.getlezione(capitoloPresodaHTML);
  }

}
