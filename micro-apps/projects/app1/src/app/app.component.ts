import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app1';

  ngOnInit() {
    localStorage.setItem('app1-message', 'App1 stored this message');
  }
}
