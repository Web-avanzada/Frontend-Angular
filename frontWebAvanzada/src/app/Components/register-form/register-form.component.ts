import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service'; // Ruta corregida
import { RegisterRequest } from '../../Dtos/register-request'; // Ruta corregida

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  email = '';
  fullName = '';
  password = '';
  role = 'estudiante';  // Este campo es ahora "estudiante" o "tutor"
  showPassword = false;

  isStudent: boolean = false;
  isTutor: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  selectOnly(role: 'student' | 'tutor') {
    if (role === 'student') {
      this.isStudent = true;
      this.isTutor = false;
      this.role = 'estudiante';
    } else {
      this.isTutor = true;
      this.isStudent = false;
      this.role = 'tutor';
    }
  }

  register() {
    const user: RegisterRequest = {
      userId: 0,  // Este campo será generado automáticamente en el backend
      userName: this.fullName,
      userMail: this.email,
      userPassword: this.password,
      userType: this.role,
    };

    this.authService.registerUser(user).subscribe({
      next: () => {
        alert('✅ Registro exitoso');
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error('❌ Error al registrar:', err);
        alert('Ocurrió un error al registrar. Intenta de nuevo.');
      }
    });
  }
}
