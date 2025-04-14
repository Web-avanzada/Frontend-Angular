import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 necesario para ngModel

@Component({
  selector: 'app-login',
  standalone: true, // 👈 importante
  imports: [FormsModule], // 👈 aquí lo importas
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailOrPhone: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;

  login() {
    console.log(this.emailOrPhone, this.password, this.rememberMe);
  }
}
