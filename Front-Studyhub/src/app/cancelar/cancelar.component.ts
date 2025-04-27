import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cancelar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css']
})
export class CancelarComponent {
  reservas = [
    { id: 1, tutor: 'Juan Pérez', fecha: '2025-05-02', hora: '10:00 am' },
    { id: 2, tutor: 'María Gómez', fecha: '2025-05-04', hora: '2:00 pm' },
  ];

  cancelarReserva(id: number) {
    this.reservas = this.reservas.filter(r => r.id !== id);
  }
}
