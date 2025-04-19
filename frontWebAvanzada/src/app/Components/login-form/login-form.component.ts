import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service'; // ajusta si tu ruta es distinta

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [AuthService]
})
export class LoginFormComponent {
  emailOrPhone = '';
  password = '';
  rememberMe = false;
  showPassword = false;

  constructor(private authService: AuthService) {}
  login() {
    console.log('🚀 Se ejecutó el método login');

    this.authService.login(this.emailOrPhone, this.password).subscribe({
      next: (res) => {
        console.log('Respuesta del servidor:', res);
        // Aquí podés guardar token o redirigir
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        // Mostrar mensaje de error al usuario
      }
    });
  }
}
