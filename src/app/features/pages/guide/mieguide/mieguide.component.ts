import { Component, OnInit } from '@angular/core';
import { Guida } from 'src/app/core/model/guida';
import { AuthService } from 'src/app/services/auth.service';
import { GuidaService } from 'src/app/services/guida.service';

@Component({
  selector: 'nxt-mieguide',
  templateUrl: './mieguide.component.html',
  styleUrls: ['./mieguide.component.scss']
})
export class MieguideComponent implements OnInit {

  mieGuide: Guida[] = [];
  constructor(private authService: AuthService, private guidaService: GuidaService) { }
  ngOnInit() {
    this.getMyGuides();
  }
  getMyGuides() {

    this.guidaService.getMieGuide().subscribe(
      risp => {
        console.log('Guide di risposta: ', risp);
        this.mieGuide = risp;
      },
      err => { console.error('ERRORE NELLA POST di myGuides', err); }
    );
  }
}