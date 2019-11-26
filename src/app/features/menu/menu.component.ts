import { Component, OnInit, Output, EventEmitter, HostListener, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router, Event, NavigationStart } from '@angular/router';
import { ChiudimenuDirective } from 'src/app/features/menu/chiudimenu.directive';

@Component({
  selector: 'nxt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {


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

  @HostListener('closeMenu', ['$event']) doClose(evento) {
    console.log('doClose: ', evento);
  }



  @ViewChildren(ChiudimenuDirective) menudir!: QueryList<ChiudimenuDirective>;
  ngAfterViewInit() {
    // viewChildren is set
    this.menudir.toArray().forEach( (el: ChiudimenuDirective) => {
      el.closeMenu.subscribe(c => this.doClose(c));
    });
  }

}
