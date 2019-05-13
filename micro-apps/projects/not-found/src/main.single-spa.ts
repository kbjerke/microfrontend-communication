import 'core-js/es7/reflect';

import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
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
  template: '<not-found-root />',
  NgZone: NgZone,
});