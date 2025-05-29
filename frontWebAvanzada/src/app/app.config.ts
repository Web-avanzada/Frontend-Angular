import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { CalendarComponentComponent } from './Components/Calendar/calendar-component/calendar-component.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { UserScheduleComponent } from './Components/Calendar/Schedule/user-schedule/user-schedule.component';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'login', pathMatch: 'full' }, 
      { path: 'login', component: LoginPageComponent },
      { path: 'calendarTutor', component: CalendarComponentComponent },
       { path: 'scheduleTutor', component: UserScheduleComponent },
      {
        path: 'register',
        loadComponent: () =>
          import('./Pages/register-page/register-page.component').then(
            (m) => m.RegisterPageComponent
          ),
      },
    ]),
    provideHttpClient(),
    provideAnimations()  ,
     importProvidersFrom(BrowserAnimationsModule)
  ],
};
