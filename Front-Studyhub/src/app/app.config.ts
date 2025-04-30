import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { LoginPageComponent } from './Pages/login-page/login-page.component';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configuración de cambio de zona y detección de cambios
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Configuración de rutas con las rutas específicas
    provideRouter([
      { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige la raíz al login
      { path: 'login', component: LoginPageComponent },
      {
        path: 'register',
        loadComponent: () =>
          import('./Pages/register-page/register-page.component').then(
            (m) => m.RegisterPageComponent
          ),
      },
      // Aquí podrías añadir más rutas según sea necesario
    ]),

    // Hidratar el cliente en el navegador
    provideClientHydration(),

    // Proveedor para HttpClient (si se requiere hacer peticiones HTTP)
    provideHttpClient(),
  ],
};
