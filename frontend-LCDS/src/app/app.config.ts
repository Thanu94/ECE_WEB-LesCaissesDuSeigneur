import {
  ApplicationConfig,
  NgModule,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgForm } from '@angular/forms';
import { carsService } from './services/cars.service';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    carsService,
    importProvidersFrom(HttpClientModule), provideAnimationsAsync(),
  ],
};
