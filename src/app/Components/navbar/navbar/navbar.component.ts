import { Component, EventEmitter, Output, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BuscadorComponent } from "../../buscador/buscador/buscador.component";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    BuscadorComponent
],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
toggleMenu() {
throw new Error('Method not implemented.');
}
@Output() toggleSidebar = new EventEmitter<void>();

onToggleSidebar() {
  this.toggleSidebar.emit();
}

verPerfil() {
  console.log('Ver perfil');
}

configuracion() {
  console.log('Configuración');
}

}
