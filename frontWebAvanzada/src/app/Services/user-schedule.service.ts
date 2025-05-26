import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSchedule } from '../Models/UserSchedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserScheduleService {
 private readonly apiUrl = 'http://localhost:5074/api/UserSchedule'; 

  constructor(private http: HttpClient) {}

  saveScheduleBulk(schedules: UserSchedule[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/bulk`, schedules);
  }
}
