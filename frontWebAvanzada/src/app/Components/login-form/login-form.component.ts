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
  
    const loginData = {
      UserName: this.emailOrPhone,
      UserPassword: this.password
    };
  
    console.log('Datos enviados al servidor:', loginData);  // Agregar este log
  
    this.authService.login(loginData.UserName, loginData.UserPassword).subscribe({
      next: (res) => {
        console.log('Respuesta del servidor:', res);
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
      }
    });
  }
}
