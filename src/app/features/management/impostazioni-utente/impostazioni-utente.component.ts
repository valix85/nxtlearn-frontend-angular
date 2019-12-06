import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtenzaService } from 'src/app/services/utenza.service';

@Component({
  selector: 'nxt-impostazioni-utente',
  templateUrl: './impostazioni-utente.component.html',
  styleUrls: ['./impostazioni-utente.component.scss']
})
export class ImpostazioniUtenteComponent implements OnInit {

  progress: number;
  setting: string;
  constructor() { }
  ngOnInit() {
    this.progress = 1;
  }
  viewOption(evento: any) {
    // console.log('SettingComponent.viewOption: input -> evento:', evento)
    this.progress = 2;
    this.setting = evento.setting;
    // console.log('changed progress in ', this.progress, ' and settings in ', this.setting);
  }

}
