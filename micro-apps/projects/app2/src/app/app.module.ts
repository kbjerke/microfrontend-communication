import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SubrouteComponent } from './subroute/subroute.component';
import { APP_BASE_HREF } from '@angular/common';
import { SingleSpaCommunicationModule } from 'single-spa-communication';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    SubrouteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SingleSpaCommunicationModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/app2'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
