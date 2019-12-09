import { Component, OnInit } from '@angular/core';
import { GuidaService } from 'src/app/services/guida.service';
import { Guida } from 'src/app/core/model/guida';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nxt-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  guide: Guida[];

  constructor(private guidaService: GuidaService, public authService: AuthService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.guidaService.getAll()
      .subscribe(risp => this.guide = risp );
  }

}
