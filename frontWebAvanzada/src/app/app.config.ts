import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { LoginPageComponent } from './Pages/login-page/login-page.component'; // Verifica que la ruta sea correcta

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: LoginPageComponent }  // Asegúrate de que esta ruta esté correcta
    ]),
    provideHttpClient()
  ]
};
