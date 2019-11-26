import { Directive, Output, ElementRef, HostListener, HostBinding, EventEmitter } from '@angular/core';



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
