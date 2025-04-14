import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Asegúrate de importar RouterOutlet

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // Asegúrate de que el template tenga el <router-outlet>
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet] // Asegúrate de importar RouterOutlet
})
export class AppComponent {
  title = 'frontWebAvanzada'; // O cualquier título que desees
}
