import { Directive, Output, ElementRef, HostListener, HostBinding, EventEmitter } from '@angular/core';

// nxtChiudimenu si applica come attributo di vari elementi HTML, il componente padre, attraverso un viewChildren sottoscriverà l'evento che essa emette, intercettandolo eseguirà ciò che vuole

@Directive({
  selector: '[nxtChiudimenu]'
})
export class ChiudimenuDirective {

  @Output('closeMenu') closeMenu: EventEmitter<MouseEvent> = new EventEmitter();
  constructor(private elem: ElementRef) { }

  @HostListener('click', ['$event']) doEmitClose(evento: MouseEvent) {
    this.closeMenu.emit(evento);
  }


}
