import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { Router } from '@angular/router';
import { UtenzaService } from 'src/app/services/utenza.service';

@Component({
  selector: 'nxt-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  @Output() nextSetting: EventEmitter<any> = new EventEmitter();
  @Input() page: number;
  usersToDisplay: User[] = [];
  toFind: string = '';
  constructor(private router: Router, public utenzaService: UtenzaService) { }
  ngOnInit() {
    this.utenzaService.initUsers().then(
      resolve => {
        this.usersToDisplay = resolve;
      }
    );
  }
  viewUsersFiltred() {
    var searching: string = this.toFind.toLowerCase();
    // console.log('searching: ', searching)
    if (this.toFind != '') {
      this.usersToDisplay = this.utenzaService.users.filter(u => {
        return u.nome.toLowerCase().includes(searching) || u.cognome.toLowerCase().includes(searching) || u.email.toLowerCase().includes(searching)
      })
    } else this.usersToDisplay = this.utenzaService.users
  }
  visualizeOptions(user: User) {
    console.log('alterUser.visualizeOptions', user);
    this.utenzaService.setRelevantUser(user.email);
    this.nextSetting.emit({
      progress: 1
    });
  }
}
