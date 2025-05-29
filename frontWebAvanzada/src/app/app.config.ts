import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { LoginPageComponent } from './Pages/login-page/login-page.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      {
        path: 'register',
        loadComponent: () =>
          import('./Pages/register-page/register-page.component').then(
            (m) => m.RegisterPageComponent
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./Pages/dashboard/dashboard-page.component').then(
            (m) => m.DashboardPageComponent
          ),
      },
    ]),
    provideHttpClient(),
  ],
};
