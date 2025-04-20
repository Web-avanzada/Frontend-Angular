import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../Dtos/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private UrlUser: string = 'http://localhost:5074/userValidateLogin';

  constructor(private httpClient: HttpClient) {}

  login(user: LoginRequest): Observable<string> {
    return this.httpClient.post(this.UrlUser, user, { responseType: 'text' });
  }
}
