import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserProfileService } from '../../Services/user-profile.service';
import { UserProfileRequest } from '../../Dtos/user-profile-request';
import { UserScheduleService } from '../../Services/user-schedule.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router,private userProfileService: UserProfileService,private scheduleService: UserScheduleService) { }


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
      next: (response) => {


        const idProfile = response.userProfilesId;

        this.scheduleService.idProfile = idProfile;
        this.message = `✅ Datos guardados correctamente. ID Perfil: ${idProfile}`;
        console.log('ID del perfil creado:', idProfile);
        this.router.navigate(['/calendarTutor']);


      },
      error: () => {
        this.message = '❌ Error al guardar los datos.';
      }
    });
  }
}
