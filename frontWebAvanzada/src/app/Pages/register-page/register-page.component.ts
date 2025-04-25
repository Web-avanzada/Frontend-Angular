import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from '../../Components/register-form/register-form.component';
import { Title } from '@angular/platform-browser';  // Importa el servicio Title

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {  // Implementa OnInit

  constructor(private titleService: Title) {
    console.log('🟢 RegisterPageComponent cargado');
  }

  ngOnInit(): void {
    this.titleService.setTitle('StudyHub - Regístrate');  // Cambia el título aquí
  }
}
