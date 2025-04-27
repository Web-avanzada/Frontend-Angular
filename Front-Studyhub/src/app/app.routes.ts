import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'; // Asegúrate de que las rutas sean correctas
import { PersonalesComponent } from './personales/personales.component'; 
import { SeguridadComponent } from './seguridad/seguridad.component'; 
import { ReservarComponent } from './reservar/reservar.component'; 
import { CancelarComponent } from './cancelar/cancelar.component';

export const routes: Routes = [
{ path: '', component: LayoutComponent, children: [
    { path: 'personales', component: PersonalesComponent },
    { path: 'seguridad', component: SeguridadComponent },
    { path: 'reservar', component: ReservarComponent },
    { path: 'cancelar', component: CancelarComponent },
]}
];
