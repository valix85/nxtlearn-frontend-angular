import { Component, OnInit, Input } from '@angular/core';
import { Guida } from 'src/app/core/model/guida';
import { ActivatedRoute, Router } from '@angular/router';
import { GuidaService } from 'src/app/services/guida.service';

@Component({
  selector: 'nxt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  guide: Guida[] = [];
  searchText: string = '';

  constructor(private rotta: ActivatedRoute, private router: Router, private guidaService: GuidaService) { }

  ngOnInit() {
    this.rotta.params.subscribe(
      par => {
        // console.log(par);
        this.searchText = par.testo;
        this.doSearch(par.testo);
      }
    );
  }

  doSearch(text: string): void {
    this.guidaService.getByName(text).subscribe(
      risp => {
        this.guide = risp;
      },
      error => console.error(error)
    );
  }

}
