import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/pages/login/login.component';
import { HomeComponent } from './features/pages/home/home.component';
import { AboutComponent } from './features/pages/about/about.component';
import { LogoutComponent } from './features/pages/logout/logout.component';
import { RegisterComponent } from './features/pages/register/register.component';
import { GuidaComponent } from './features/pages/guida/guida.component';
import { GuideComponent } from './features/pages/guide/guide.component';
import { GuidaGuard } from './features/pages/guida/guida.guard';
import { NotFoundComponent } from './features/pages/notfound/notfound.component';
import { NuovaguidaComponent } from './features/pages/guida/nuovaguida/nuovaguida.component';
import { SearchComponent } from './features/pages/search/search.component';
import { LezioneComponent } from './features/pages/lezione/lezione.component';
import { NuovaguidaurlComponent } from './features/pages/guida/nuovaguidaurl/nuovaguidaurl.component';
import { UsersettingComponent } from './features/management/usersetting/usersetting.component';
import { NuovalezioneComponent } from './features/pages/lezione/nuovalezione/nuovalezione.component';
import { MieguideComponent } from './features/pages/guide/mieguide/mieguide.component';
import { ImpostazioniUtenteComponent } from './features/management/impostazioni-utente/impostazioni-utente.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'settings/user', component: ImpostazioniUtenteComponent, canActivate: [GuidaGuard]},
  {path: 'settings/users', component: UsersettingComponent, canActivate: [GuidaGuard]},
  {path: 'guide', component: GuideComponent},
  {path: 'guide/iscrizioni', component: MieguideComponent, canActivate: [GuidaGuard]},
  {path: 'guida/search/:testo', component: SearchComponent },
  {path: 'guida/add', component: NuovaguidaComponent, canActivate: [GuidaGuard] },
  {path: 'guida/addbyurl', component: NuovaguidaurlComponent, canActivate: [GuidaGuard]},
  {path: 'guida/newlezione', component: NuovalezioneComponent, canActivate: [GuidaGuard] },
  {path: 'guida/:id', component: GuidaComponent, canActivate: [GuidaGuard] },
  {path: 'guida/:id/capitolo/:idc/lezione/:idl', component: LezioneComponent, canActivate: [GuidaGuard] },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
