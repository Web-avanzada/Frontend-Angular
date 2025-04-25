import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Importa el AppComponent
import { appConfig } from './app/app.config'; // Importa la configuración de rutas

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err)); // Inicia la aplicación con el AppComponent
