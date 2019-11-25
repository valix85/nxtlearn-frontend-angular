import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuidaGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate( ) {
    const stato = this.authService.isLogged();
    if (!stato) {
      this.router.navigateByUrl('login');
    }
    return stato;
  }

}
