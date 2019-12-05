import { Component, OnInit } from '@angular/core';
import { UtenzaService } from 'src/app/services/utenza.service';
import { AuthService } from 'src/app/services/auth.service';
import { RuoloService } from 'src/app/services/ruolo.service';

@Component({
  selector: 'nxt-changerole',
  templateUrl: './changerole.component.html',
  styleUrls: ['./changerole.component.scss']
})
export class ChangeroleComponent implements OnInit {

  roles: string[] = [];
  relevantRole: string;
  constructor(private roleService: RuoloService, public utenzaService: UtenzaService, private authService: AuthService) { }
  ngOnInit() {
    this.roleService.getAll().subscribe(
      risp => {
        console.log('risposta: ', risp);
        this.roles = risp;
        console.log('ruoli nel subscribe: ', this.roles);
      },
      err => console.error(err)
    );
    this.relevantRole = this.utenzaService.relevantUser.ruoli.replace('ROLE_', '');
  }
  actualRole(): string { // permette di sapere il ruolo di inizio dell'utente
    return this.utenzaService.relevantUser.ruoli;
  }
  updateRole(role: string) {
    this.relevantRole = role;
  }
  saveRole() {
    this.utenzaService.relevantUser.ruoli = this.relevantRole;
    console.log('Role changed to -> ', this.utenzaService.relevantUser.ruoli);
    this.utenzaService.updateRole(this.relevantRole).subscribe(
      risp => {
        alert('Ruolo salvato con successo');
        console.log('Successo');
      },
      err => console.log('Errore')
    );
  }
}
