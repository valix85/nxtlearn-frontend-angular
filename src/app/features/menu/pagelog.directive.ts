import { Directive, ElementRef, OnInit, HostListener, Renderer2, HostBinding, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[nxtPagelog]'
})
export class PagelogDirective implements OnInit {

  @Input() defaultColor: string = 'inherit';
  @Input('nxtPagelog') hoverColor: string = 'red';

  @HostBinding('style.color') color: string;
  @HostBinding('style.backgroundColor') bgColor: string;

  constructor(private tag: ElementRef, private route: ActivatedRoute, private render: Renderer2) { }

  ngOnInit() {
    console.log('TAG: ', this.tag);
    /*
    this.tag.nativeElement.onclick = () => {
      console.log('cliccato');
    }
    document.onclick = ()=> {
      console.log('cliccato a caso');
    }
    */
  }


  @HostListener('click',['$event']) doClick(evento: MouseEvent) {
    console.log('EVENTO CLICK tramite HostListener');
    console.log(evento);
  }

  @HostListener('mouseenter') doIn() {
    // console.log('TAG in');
    // this.render.setStyle(this.tag.nativeElement, 'color', 'red');
    this.color = this.hoverColor;
    this.bgColor = '#333';
  }

  @HostListener('mouseleave') doOut() {
    // console.log('TAG out');
    // this.render.removeStyle(this.tag.nativeElement,  'color');
    this.color = this.defaultColor;
    this.bgColor = 'inherit';
  }


}
