import { Component, OnInit } from '@angular/core';
import { UtenzaService } from 'src/app/services/utenza.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PermissionType } from '../../permission/myPpermissionType';

@Component({
  selector: 'nxt-usersetting',
  templateUrl: './usersetting.component.html',
  styleUrls: ['./usersetting.component.scss']
})
export class UsersettingComponent implements OnInit {

  page = 1;
  progress: number;
  setting: string;
  //   @HostListener('window:beforeunload', ['$event'])
  // unloadHandler(event: Event) {
  // 	console.log('LEAVING AOSIDJASOIDJAOPSIDJAPSDOJAPSDO')
  // }
  nonVisitata = true;
  p = PermissionType;
  constructor(private utenzaService: UtenzaService, private router: Router, public authService: AuthService) {
  }
  ngOnInit() {
    this.progress = 0;
    this.utenzaService.initUsers()
      .then(res => {
        this.utenzaService.relevantUser = this.utenzaService.emailToUser(this.utenzaService.authService.data.username);
        console.log('Constructor Settings: relevantUser return the logged user', this.utenzaService.relevantUser);
      });
  }
  viewNext(evento: any) {
    console.log('progress: ', this.progress);
    this.progress = evento.progress;
    console.log('progress moved to: ', this.progress);
  }
  viewOption(evento: any) {
    console.log('SettingComponent.viewOption: input -> evento:', evento);
    this.viewNext(evento);
    this.setting = evento.setting;
    console.log('changed progress in ', this.progress, ' and settings in ', this.setting);
  }
  givePage(event: any) {
    this.page = event;
  }
}
