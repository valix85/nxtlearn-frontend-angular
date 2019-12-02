import { Component, OnInit, Output, EventEmitter, HostListener, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router, Event, NavigationStart } from '@angular/router';
import { ChiudimenuDirective } from 'src/app/features/menu/chiudimenu.directive';
import { PermissionType } from '../permission/permissionType';

@Component({
  selector: 'nxt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

  p = PermissionType;

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
      this.chiudiMenu(); // inibito per testare l'evento emesso dalla direttiva figlia ESEMPIO 1
    }
  }

  chiudiMenu() {
    this.isCollapsed = false;
    this.menuGuida = false;
    this.menuChiuso.emit({componente: 'menu', stato: 'chiuso'});
  }

  // rimosso perchè si fa su altro componente
  // doSearch(dati: NgForm) {
  //   console.log(dati.form);
  // }

  // ESEMPIO 1
  // ---- INIZIO ESEMPIO DIRETTIVA FIGLIA ----
  // usata come esempio per evitare di intercettare gli eventi di navigaizone emessi da router module

  @ViewChildren(ChiudimenuDirective) menudir!: QueryList<ChiudimenuDirective>;
  ngAfterViewInit() {
    // viewChildren is set
    this.menudir.toArray().forEach( (el: ChiudimenuDirective) => {
      el.closeMenu.subscribe(c => this.doClose(c));
    });
  }
  // metodo a scopo didattico, solo per non perdere l'evento
  doClose(evento) {
    // console.log('doClose: ', evento);
    this.chiudiMenu();
  }
  // ---- FINE ESEMPIO DIRETTIVA FIGLIA ----




  onKeydown(event) {
    console.log(event);
    this.router.navigate(['/guida/search',this.txtSearch]);
  }



}
