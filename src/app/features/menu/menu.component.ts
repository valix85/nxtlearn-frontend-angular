import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router, Event, NavigationStart } from '@angular/router';


@Component({
  selector: 'nxt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  isCollapsed = false; // comanda apertura navbar in responsive
  menuGuida = false;   // comanda apertura sottomenu guida

  txtSearch = '';


  @Output() menuChiuso: EventEmitter<any> = new EventEmitter();

  constructor(public authService: AuthService, private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
  });
  }

  ngOnInit() {
  }

  checkRouterEvent(evento: Event): void {
    if (evento instanceof NavigationStart) {
      // console.log('prima di cambiare');
      this.chiudiMenu();
    }
  }

  chiudiMenu() {
    this.isCollapsed = false;
    this.menuGuida = false;
    this.menuChiuso.emit({componente: 'menu', stato: 'chiuso'});
  }

  doSearch(dati: NgForm) {
    console.log(dati.form);
  }

}
