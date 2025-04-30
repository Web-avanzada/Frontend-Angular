import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // 👈 Agregar esto
import { AuthService } from '../../Services/auth.service';
import { LoginRequest } from '../../Dtos/LoginRequest';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], // 👈 Agregar aquí también
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [AuthService]
})
export class LoginFormComponent {
  userMail: string = '';
  userPassword: string = '';
  rememberMe = false;
  showPassword = false;

  loginMessage: string = ''; // Para mostrar mensaje en pantalla

  constructor(private authService: AuthService) {}

  login() {
    const loginData = new LoginRequest();
    loginData.UserMail = this.userMail;
    loginData.UserPassword = this.userPassword;

    console.log('Enviando al backend:', loginData);

    this.authService.login(loginData).subscribe({
      next: (response) => {
        this.loginMessage = '✅ Inicio de sesión exitoso.';
        console.log(response);
      },
      error: (err) => {
        console.error(err);
        if (err?.error === 'User not found') {
          this.loginMessage = '❌ Usuario o contraseña incorrectos.'; // Mensaje consistente
        } else {
          this.loginMessage = '❌ Error al iniciar sesión. Verifica tus credenciales.'; // Mensaje genérico para otros errores
        }
      }
    });
  }
}
