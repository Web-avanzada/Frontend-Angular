import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // 👈 Agregar esto
import { AuthService } from '../../Services/auth.service';
import { LoginRequest } from '../../Dtos/LoginRequest';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule], // 👈 Agregar aquí también
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [AuthService]
})
export class LoginFormComponent {
  userName: string = '';
  userPassword: string = '';
  rememberMe = false;
  showPassword = false;

  loginMessage: string = ''; // Para mostrar mensaje en pantalla

  constructor(private authService: AuthService) {}

  login() {
    const loginData = new LoginRequest();
    loginData.UserName = this.userName;
    loginData.UserPassword = this.userPassword;
  
    console.log('Enviando al backend:', loginData); // Para debug
  
    this.authService.login(loginData).subscribe({
      next: (response) => {
        this.loginMessage = '✅ Inicio de sesión exitoso.';
        console.log(response);
      },
      error: (err) => {
        this.loginMessage = '❌ Error al iniciar sesión. Verifica tus credenciales.';
        console.error(err);
      }
    });
  }
}
