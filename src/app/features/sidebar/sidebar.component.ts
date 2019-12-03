import { Component, OnInit, Input } from '@angular/core';
import { Guida } from 'src/app/core/model/guida';

@Component({
  selector: 'nxt-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() guida: Guida;
  constructor() { }
  ngOnInit() {
  }
  toggleSidebar(){
    document.getElementById('sidebar').classList.toggle('active');
  }
}