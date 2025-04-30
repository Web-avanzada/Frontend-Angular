import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../Dtos/LoginRequest';
import { RegisterRequest } from '../Dtos/register-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private UrlUserLogin: string = 'http://localhost:5074/userValidateLogin';
  private UrlRegister: string = 'http://localhost:5074/api/User';

  constructor(private httpClient: HttpClient) {}

  login(user: LoginRequest): Observable<string> {
    return this.httpClient.post(this.UrlUserLogin, user, { responseType: 'text' });
  }

  registerUser(user: RegisterRequest): Observable<any> {
    return this.httpClient.post(this.UrlRegister, user);
  }
}
