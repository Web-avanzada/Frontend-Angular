import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5074/userValidate'; // <-- tu endpoint real

  constructor(private http: HttpClient) {}

  login(emailOrPhone: string, password: string): Observable<any> {
    const body = {
      emailOrPhone,
      password
    };
  
    return this.http.post(this.apiUrl, body);  // Hacer la petición POST con el cuerpo del formulario
  }
}
