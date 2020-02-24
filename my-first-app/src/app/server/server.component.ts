import { Component } from '@angular/core';

@Component({
  selector:'server',
  templateUrl:'./server.component.html',
  styleUrls:['./server.componenet.css']
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'offline';
  getColor(){
    return this.serverStatus === 'online'? 'white': 'black'
  }
  getBackColor(){
    return this.serverStatus === 'online'? 'green': 'red'
  }
  getPadding(){
    return this.serverStatus === 'online'? '6px': '3px'
  }
}
