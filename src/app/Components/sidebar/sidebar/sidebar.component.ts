import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() itemSeleccionado = new EventEmitter<string>();

  menuVisible = true;

  panels = [
    {
      title: 'Datos Personales',
      icon: 'person',
      items: [
        { label: 'Usuarios', value: 'usuarios' },
        { label: 'Personales', value: 'personales' },
        { label: 'Seguridad', value: 'seguridad' }
      ]
    },
    {
      title: 'Reservas',
      icon: 'event',
      items: [
        { label: 'Reservar', value: 'reservar' },
        { label: 'Cancelar', value: 'cancelar' }
      ]
    },
    {
      title: 'Tutorías',
      icon: 'school',
      items: [
        { label: 'Temáticas', value: 'tematicas' },
        { label: 'Sala Online', value: 'sala' },
        { label: 'Históricos', value: 'historicos' }
      ]
    },
    {
      title: 'Cerrar Sesión',
      icon: 'logout',
      items: [
        { label: 'Cambio de tipo', value: 'tipo' },
        { label: 'Cerrar sesión', value: 'cerrar' }
      ]
    }
  ];

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  seleccionarItem(item: string) {
    this.itemSeleccionado.emit(item);
  }
}
