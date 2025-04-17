import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  emailOrPhone = '';
  password = '';
  rememberMe = false;
  showPassword = false;

  login() {
    console.log(this.emailOrPhone, this.password, this.rememberMe);
  }
}
