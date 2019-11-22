import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'nxt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  isCollapsed = false; // comanda apertura navbar in responsive
  menuGuida = false;   // comanda apertura sottomenu guida

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  chiudiMenu() {
    this.isCollapsed = false;
    this.menuGuida = false;
  }

}
