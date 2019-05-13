import 'core-js/es7/reflect';
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import singleSpaAngular from 'single-spa-angular';

if (environment.production) {
  enableProdMode();
}

const domElementGetter = (): HTMLElement => document.getElementById('content');

export default singleSpaAngular({
  bootstrapFunction: () => platformBrowserDynamic().bootstrapModule(AppModule),
  domElementGetter: domElementGetter,
  template: '<app2-root />',
  Router,
  NgZone: NgZone,
  AnimationEngine,
});
