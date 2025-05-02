import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalesComponent } from '../personales/personales.component';
import { SeguridadComponent } from '../seguridad/seguridad.component';
import { ReservarComponent } from '../reservar/reservar.component';
import { CancelarComponent } from '../cancelar/cancelar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, PersonalesComponent, 
    SeguridadComponent, 
    ReservarComponent,
    CancelarComponent,
    RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  itemSeleccionado = 'personales'; // predeterminado

  seleccionarItem(item: string) {
    this.itemSeleccionado = item;
  }
}
