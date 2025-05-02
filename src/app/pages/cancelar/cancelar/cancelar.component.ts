import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cancelar',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css']
})
export class CancelarComponent {
  displayedColumns = ['tutor', 'fecha', 'hora', 'eliminar'];
  reservas = [
    { id: 1, tutor: 'Juan Pérez', fecha: '2025-04-25', hora: '10:00 AM' },
    { id: 2, tutor: 'María Gómez', fecha: '2025-04-26', hora: '2:00 PM' }
  ];

  eliminarReserva(id: number) {
    this.reservas = this.reservas.filter(reserva => reserva.id !== id);
  }
}
