import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { UsuariosComponent } from './pages/usuarios/usuarios/usuarios.component';
import { PersonalesComponent } from './pages/personales/personales/personales.component';
import { SeguridadComponent } from './pages/seguridad//seguridad/seguridad.component';
import { ReservarComponent } from './pages/reservar//reservar/reservar.component';
import { CancelarComponent } from './pages/cancelar//cancelar/cancelar.component';
import { TematicasComponent } from './pages/tematicas//tematicas/tematicas.component';
import { SalaComponent } from './pages/sala//sala/sala.component';
import { HistoricosComponent } from './pages/historicos//historicos/historicos.component';

export const appRoutes: Routes = [
{
    path: '',
    component: MainLayoutComponent,
    children: [
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'personales', component: PersonalesComponent },
    { path: 'seguridad', component: SeguridadComponent },
    { path: 'reservar', component: ReservarComponent},
    { path: 'cancelar', component: CancelarComponent },
    { path: 'tematicas', component: TematicasComponent },
    { path: 'sala', component: SalaComponent},
    { path: 'historicos', component: HistoricosComponent },
    { path: '', redirectTo: 'usuarios', pathMatch: 'full' }
    ]
}
];
