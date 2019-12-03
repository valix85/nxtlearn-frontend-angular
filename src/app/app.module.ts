import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './features/menu/menu.component';
import { HomeComponent } from './features/pages/home/home.component';
import { LoginComponent } from './features/pages/login/login.component';
import { LogoutComponent } from './features/pages/logout/logout.component';
import { AboutComponent } from './features/pages/about/about.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './features/pages/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GuideComponent } from './features/pages/guide/guide.component';
import { GuidaComponent } from './features/pages/guida/guida.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { NotFoundComponent } from './features/pages/notfound/notfound.component';
import { PagelogDirective } from './features/menu/pagelog.directive';
import { ChiudimenuDirective } from './features/menu/chiudimenu.directive';
import { NuovaguidaComponent } from './features/pages/guida/nuovaguida/nuovaguida.component';
import { NuovaguidaurlComponent } from './features/pages/guida/nuovaguidaurl/nuovaguidaurl.component';
import { IsGrantedDirective } from './features/permission/is-granted.directive';
import { SearchComponent } from './features/pages/search/search.component';
import { GuidaCardComponent } from './features/pages/guida/guida-card/guida-card.component';
import { LezioneComponent } from './features/pages/lezione/lezione.component';
import { SidebarComponent } from './features/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    AboutComponent,
    RegisterComponent,
    GuideComponent,
    GuidaComponent,
    NotFoundComponent,
    PagelogDirective,
    ChiudimenuDirective,
    NuovaguidaComponent,
    NuovaguidaurlComponent,
    IsGrantedDirective,
    SearchComponent,
    GuidaCardComponent,
    LezioneComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
