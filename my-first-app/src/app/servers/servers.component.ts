import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  template:
  `
  <h3>Test Header</h3>
  `,
  // styleUrls: ['./servers.component.css'],
  styles:[
    `
    h3{
      color:dodgerblue;
    }
    `
  ]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
