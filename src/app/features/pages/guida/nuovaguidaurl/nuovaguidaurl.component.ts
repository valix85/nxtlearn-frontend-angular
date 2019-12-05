import { Component, OnInit } from '@angular/core';
import { Guida } from 'src/app/core/model/guida';
import { environment as env } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GuidaService } from 'src/app/services/guida.service';

@Component({
  selector: 'nxt-nuovaguidaurl',
  templateUrl: './nuovaguidaurl.component.html',
  styleUrls: ['./nuovaguidaurl.component.scss']
})
export class NuovaguidaurlComponent implements OnInit {
  formCreaGuidaUrl: Guida = new Guida();
  flag: string;
  constructor(private guidaService: GuidaService, private router: Router) { }
  ngOnInit() {
  }
  doGuidaByUrl(f: NgForm) {
    console.log('f: ', f, NuovaguidaurlComponent);
    this.guidaService.getByUrl(f.form.value.nome)
      .subscribe(
        (risp) => {
          this.flag = 'successo';
          console.log(risp, 'nuovaguidaurl.component.doGuidaByUrl');
          // this.router.navigate(['../../guide']);
        },
        (err) => {
          this.flag = 'fallimento';
          console.log(err, 'Errore ');
        }
      );
  } // end method
}
