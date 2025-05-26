import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { CalendarComponentComponent } from './Components/Calendar/calendar-component/calendar-component.component';
import { provideAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'login', pathMatch: 'full' }, 
      { path: 'login', component: LoginPageComponent },
      { path: 'calendarTutor', component: CalendarComponentComponent },
      {
        path: 'register',
        loadComponent: () =>
          import('./Pages/register-page/register-page.component').then(
            (m) => m.RegisterPageComponent
          ),
      },
    ]),
    provideHttpClient(),
    provideAnimations()  
  ],
};
