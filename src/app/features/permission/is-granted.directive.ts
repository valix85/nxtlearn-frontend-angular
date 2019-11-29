import { Directive, TemplateRef, ViewContainerRef, ElementRef, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { PermissionType } from './permissionType';
import { PermissionManagerService } from 'src/app/services/permissionManager.service';

@Directive({
  selector: '[nxtIsGranted]'
})
export class IsGrantedDirective implements OnInit, OnChanges, OnDestroy {

  private activeView = false; // mostro o non mostro il componente sul DOM


  @Input('nxtIsGrantedPermesso') permesso: PermissionType;
  @Input('nxtIsGrantedLoggato') loggato: boolean;


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private elementRef: ElementRef,
    private permissionManagerService: PermissionManagerService
  ) {
    console.log('Direttiva custom invocata');
    // console.log(this.permesso);
    // console.log(this.ruolo);
    // console.log(this.numero);
  }

  ngOnInit() {
    console.log('Direttiva custom init');
    // console.log(this.permesso);
    // console.log(this.ruolo);
    // console.log(this.numero);
  }

  ngOnChanges() {
    console.log('Direttiva custom changes');
    // console.log(this.permesso);
    // console.log(this.ruolo);
    console.log(this.loggato);
    this.nxtIsGranted();
  }

  ngOnDestroy(){
    // this.nxtIsGranted(this.loggato);
  }

  // https://netbasal.com/understanding-angular-structural-directives-659acd0f67e

  nxtIsGranted() {
    // console.log(num, this.permesso)
    if (this.loggato && !this.activeView) {
      // todo fare controllo del permesso richiesto per la funzionalità
      if (this.permissionManagerService.isGranted(this.permesso)) {
        console.log('ho il permesso');
        this.activeView = true;
        this.viewContainer.createEmbeddedView(this.templateRef);
      }else {
        console.warn('non ho il permesso');
      }
    } else if (!this.loggato && this.activeView) {
      this.activeView = false;
      this.viewContainer.clear();
    }
  }
 

}
