import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/auth.service';
import { LoginRequest } from '../../Dtos/LoginRequest';
import { Router, RouterModule } from '@angular/router';
import { CalendarComponentComponent } from '../Calendar/calendar-component/calendar-component.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [AuthService]
})
export class LoginFormComponent {
  userMail: string = '';
  userPassword: string = '';
  rememberMe = false;
  showPassword = false;

  loginMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const loginData = new LoginRequest();
    loginData.UserMail = this.userMail;
    loginData.UserPassword = this.userPassword;

    console.log('Enviando al backend:', loginData);

    this.authService.login(loginData).subscribe({
      next: (response) => {
        this.loginMessage = '✅ Inicio de sesión exitoso.';
         localStorage.setItem('token',response);
        console.log(response);

        // Redirigir al dashboard
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error(err);
        if (err?.error === 'User not found') {
          this.loginMessage = '❌ Usuario o contraseña incorrectos.';
        } else {
          this.loginMessage = '❌ Error al iniciar sesión. Verifica tus credenciales.';
        }
      }
    });
  }
}
