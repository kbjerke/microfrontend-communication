import { Component, OnDestroy, OnInit } from '@angular/core';
import { SingleSpaCommunicationService, MessageType } from 'single-spa-communication';

/* tslint:disable:component-selector */
@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* tslint:enable:component-selector */
export class AppComponent implements OnInit {
  title = 'app2';
  localStorageMessage: string;

  constructor(private comm: SingleSpaCommunicationService) { }

  ngOnInit() {
    const message = localStorage.getItem('app1-message');
    if (message) {
      this.localStorageMessage = message;
    }
  }

  sendRedirect() {
    this.comm.send(MessageType.REDIRECT, 'app1');
  }

  testLogin() {
    this.comm.send(MessageType.LOGIN, 'not implemented');
  }
}
