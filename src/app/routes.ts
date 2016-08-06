import { provideRouter, RouterConfig } from '@angular/router';
import { SpeakersComponent } from  './speakers/index';
import { SpeakerDetailsComponent } from  './speaker-details/index';

const routes: RouterConfig = [
    {
        path: 'speakers',
        component: SpeakersComponent
    },
    {
        path: 'speakers/:id',
        component: SpeakerDetailsComponent
    },
    {
        path: '',
        redirectTo: '/speakers',
        pathMatch: 'full'
    }
];

export const APP_ROUTE_PROVIDERS = [
    provideRouter(routes)
];