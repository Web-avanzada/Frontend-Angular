import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfileService } from '../../Services/user-profile.service';
import { UserProfileRequest } from '../../Dtos/user-profile-request';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  student = {
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    mail: '',
    nacimiento: '',
    intereses: '',
  };

  message = '';

  constructor(private userProfileService: UserProfileService) {}

  saveStudent() {
    const request: UserProfileRequest = {
      userProfilesId: 0,
      createDate: new Date().toISOString(),
      name: this.student.nombres,
      lastName: this.student.apellidos,
      address: this.student.direccion,
      phone: this.student.telefono,
      mail: this.student.mail,
      dateOfBirth: this.student.nacimiento,
      occupationInterests: this.student.intereses,
      status: true,
      userId: 1 // 🔁 Ajusta esto si tienes el userId guardado dinámicamente
    };

    this.userProfileService.createUserProfile(request).subscribe({
      next: () => this.message = '✅ Datos guardados correctamente.',
      error: () => this.message = '❌ Error al guardar los datos.'
    });
  }
}
