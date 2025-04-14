import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component'; // Asegúrate de importar el LoginComponent

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent }, // Ruta raíz apunta a LoginComponent
    ])
  ]
};
