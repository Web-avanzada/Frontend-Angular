import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../Components/login-form/login-form.component'; // ajusta si la ruta es distinta

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, LoginFormComponent], // 👈 IMPORTANTE
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor() {
    console.log('🟢 LoginPageComponent cargado');
  }
}
