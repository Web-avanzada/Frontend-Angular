import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfileRequest } from '../Dtos/user-profile-request';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  private apiUrl = 'http://localhost:5074/api/UserProfile';

  constructor(private http: HttpClient) {}

  createUserProfile(profile: UserProfileRequest): Observable<any> {
    return this.http.post(this.apiUrl, profile);
  }
}
