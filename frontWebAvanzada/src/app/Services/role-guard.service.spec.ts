import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Interfaz para la respuesta de login (si estás usando JWT, esto debería incluir un token)
interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5074/userValidate';

  constructor(private http: HttpClient) {}

  login(emailOrPhone: string, password: string): Observable<LoginResponse> {
    const body = { emailOrPhone, password };

    return this.http.post<LoginResponse>(this.apiUrl, body).pipe(
      catchError(this.handleError) // Manejo de errores
    );
  }

  private handleError(error: any): Observable<never> {
    // Aquí puedes personalizar cómo manejar los errores (por ejemplo, mostrar un mensaje en la UI)
    console.error('Error en la solicitud HTTP:', error);
    return throwError('Hubo un problema al realizar la solicitud, por favor intente más tarde.');
  }
}
