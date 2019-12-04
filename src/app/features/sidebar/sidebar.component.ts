import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Guida } from 'src/app/core/model/guida';
import { Lezione } from 'src/app/core/model/lezione';

@Component({
  selector: 'nxt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() guida: Guida;
  indice: Lezione[] = [];
  constructor() { }
  ngOnInit() {
  }

  ngOnChanges() {
    if (this.guida) {
      this.guida.capitoli.forEach(
        cap => cap.lezioni.forEach(lezione => {
          this.indice.push(lezione);
        }));
      console.log('indice', this.indice);
    }
  }
  toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
  }

  getIndice(lezione: Lezione): number {
    const idx = this.indice.findIndex(l => l === lezione);
    return idx;
  }
}