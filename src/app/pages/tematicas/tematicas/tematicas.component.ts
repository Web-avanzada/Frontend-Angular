import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tematicas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tematicas.component.html',
  styleUrls: ['./tematicas.component.css']
})
export class TematicasComponent {
  tematicas = ['Matemáticas', 'Física', 'Química', 'Biología', 'Programación'];
}
