import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
    console.log('AuthInterceptor Service creato');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('intercettato');
    if (this.authService.isLogged()) {
      // console.log('utente intercettato loggato');
      req = req.clone({
        setHeaders: { Authorization: 'Bearer ' + this.authService.getAuth() },
        withCredentials: true
      });
    }
    return next.handle(req);
  }

}
