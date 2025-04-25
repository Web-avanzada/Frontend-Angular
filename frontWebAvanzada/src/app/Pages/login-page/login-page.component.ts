import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../Components/login-form/login-form.component'; // ajusta si la ruta es distinta
import { Title } from '@angular/platform-browser';  // Importa el servicio Title

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, LoginFormComponent], // 👈 IMPORTANTE
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {  // Implementa OnInit

  constructor(private titleService: Title) {
    console.log('🟢 LoginPageComponent cargado');
  }

  ngOnInit(): void {
    this.titleService.setTitle('StudyHub - Inicia sesión');  // Cambia el título aquí
  }
}
