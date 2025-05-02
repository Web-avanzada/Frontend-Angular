import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-historicos',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './historicos.component.html',
  styleUrls: ['./historicos.component.css']
})
export class HistoricosComponent {
  historicos = [
    { tema: 'Matemáticas', fecha: '2025-04-10', hora: '3:00 PM' },
    { tema: 'Inglés', fecha: '2025-04-11', hora: '4:00 PM' }
  ];
}
