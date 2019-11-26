import { Directive, Output, ElementRef, HostListener, HostBinding } from '@angular/core';
import { EventEmitter } from 'events';


@Directive({
  selector: '[nxtChiudimenu]'
})
export class ChiudimenuDirective {

  @Output('closeMenu') closeMenu: EventEmitter = new EventEmitter();
  constructor(private elem: ElementRef) { }

  @HostListener('click') doEmitClose(evento) {
    this.closeMenu.emit(evento);
  }


}
