import { Component, OnInit } from '@angular/core';
import { Guida } from 'src/app/core/model/guida';
import { GuidaService } from 'src/app/services/guida.service';
import { UtenzaService } from 'src/app/services/utenza.service';
import { HttpClient } from '@angular/common/http';
import { environment as env } from './../../../../environments/environment';

@Component({
  selector: 'nxt-assignguide',
  templateUrl: './assignguide.component.html',
  styleUrls: ['./assignguide.component.scss']
})
export class AssignguideComponent implements OnInit {
  guideToDisplay: Guida[] = [];
  guide: Guida[] = [];
  toFind = '';
  constructor(private guidaService: GuidaService, public utenzaService: UtenzaService, private http: HttpClient) {
  }
  ngOnInit() {
    // this.initGuide().then( resolve => this.fillGuideSelection());
    this.guidaService.getAll().subscribe(
      risp => {
        this.guide = risp,
          this.guideToDisplay = this.guide;
      },
      err => {
        console.log(err);
      });
    this.utenzaService.initUsers().then(resolve => this.checkGuideAlreadySubscribed());
  }

  assignGuide() { // mando le guide al server
    console.log('assignGuide');
    let replacingGuide: number[] = [];
    this.guideToDisplay.forEach(guida => {
      const checkbox =  document.querySelector('#guida' + guida.id) as HTMLInputElement;
      if (checkbox.checked) {
        console.log(checkbox.value);
        replacingGuide.push(guida.id);
      }
    });
    console.log('inviando dati al server', replacingGuide);
    this.utenzaService.updateGuides(replacingGuide).subscribe(
      risp => {
        alert('Guide salvate!');
        console.log(risp);
      },
      err => console.log('ERRORE NELLA POST')
    );
  }
  checkGuideAlreadySubscribed() { // spostare la chiamata nel service
    const assignGuide = this;
    const guideChecked = new Promise<Guida[]>((resolve, reject) => {
      assignGuide.http.post<Guida[]>(env.apiUrl + '/utenza/myGuides', assignGuide.utenzaService.relevantUser.email).subscribe(
        risp => {
          console.log('Guide di risposta: ', risp);
          resolve(risp);
        },
        err => { console.log('ERRORE NELLA POST di myGuides', err); reject(err); }
      );
    }).then(resolve => resolve.forEach(guida => {
      const checkbox = document.querySelector('#guida' + guida.id) as HTMLInputElement;
      checkbox.checked = true;
    }));
  }
  viewUsersFiltred() {
    let searching: string = this.toFind.toLowerCase();
    // console.log('searching: ', searching)
    if (searching !== '') {
      this.guideToDisplay = this.guide.filter(g => {
        return g.nome.toLowerCase().includes(searching) || g.descrizione.toLowerCase().includes(searching);
      });
    } else { this.guideToDisplay = this.guide }
  }
}
