import { Component } from '@angular/core';

@Component({
  selector: 'nxt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  /*
  template: `
  <div>
    <h1>Welcome to {{title}} (inline)</h1>
  </div>
  `,
  styles:[`
  h1{
    color:red;
    text-transform:lowercase;
  }`
]*/
})
export class AppComponent {

  onAscoltaMenu(value: any): void {
    // console.log(value);
  }

}
