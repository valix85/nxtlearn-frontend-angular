import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PermissionType } from '../../permission/myPpermissionType';
import { AuthService } from 'src/app/services/auth.service';
import { UtenzaService } from 'src/app/services/utenza.service';

@Component({
  selector: 'nxt-optionlist',
  templateUrl: './optionlist.component.html',
  styleUrls: ['./optionlist.component.scss']
})
export class OptionlistComponent implements OnInit {

  @Output() lastSetting: EventEmitter<any> = new EventEmitter();
  @Input() typeView: number = 2;
  p = PermissionType;
  constructor(public authService: AuthService, private utenzaService: UtenzaService) {
  }
  ngOnInit() {
    if(this.typeView === 1) {
    this.utenzaService.relevantUser = this.utenzaService.emailToUser(this.authService.data.username);
    console.log('relevantUser: ', this.utenzaService.relevantUser)}
  }
  viewSetting(setting: string){
    console.log('ListOption.viewSetting(', setting, ')');
    this.lastSetting.emit({
      progress: 2,
      setting: setting
    });
  }
}
