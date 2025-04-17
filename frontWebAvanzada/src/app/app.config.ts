import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: LoginPageComponent },
    ])
  ]
};
