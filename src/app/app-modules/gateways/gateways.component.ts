import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gateways',
  template: `
    <app-one-column>
      <router-outlet></router-outlet
    ></app-one-column>
  `,
})
export class GatewaysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
