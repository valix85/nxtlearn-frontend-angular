import { Component, OnInit } from '@angular/core';
import { UtenzaService } from 'src/app/services/utenza.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'nxt-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  pwd = '';
  checkpwd = '';
  adminpwd: string;
  pwdVisible = false;
  adminPwdVisible = false;
  success: string;
  constructor(private utenzaService: UtenzaService) { }
  ngOnInit() {
  }
  isValid(form: NgForm): boolean {
    if (form.valid && this.pwd === this.checkpwd) {
        return true;
    }
    return false;
  }
  hideOrView(n: number) {
    if (n === 1) {
      this.pwdVisible = !this.pwdVisible;
    } else if (n === 2) {
      this.adminPwdVisible = !this.adminPwdVisible;
    } else {
      console.log('Error in ChangePassword.hideOrView()');
    }
  }
  changePwd(pwd: string, adminpwd: string) {
    this.utenzaService.updatePwd(pwd, adminpwd).subscribe(
      risp => {
        if (risp) {
          console.log('succ');
          this.success = 'successo';
        } else {
          console.log('err');
          this.success = 'fallito'; }
      },
      err => console.error(err)
    );
  }
}
