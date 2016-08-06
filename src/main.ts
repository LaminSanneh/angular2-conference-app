 import { bootstrap } from '@angular/platform-browser-dynamic';
 import { enableProdMode } from '@angular/core';
 import { AppComponent, environment } from './app/';
 import { HTTP_PROVIDERS } from '@angular/http';
 import { SpeakerService } from './app/speakers/services/speaker-service';
 import { APP_ROUTE_PROVIDERS } from './app/routes';

 if (environment.production) {
   enableProdMode();
 }

 bootstrap(AppComponent, [
   HTTP_PROVIDERS, SpeakerService, APP_ROUTE_PROVIDERS
 ]);