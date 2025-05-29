import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSchedule } from '../Models/UserSchedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserScheduleService {
 private readonly apiUrl = 'http://localhost:5074/api/UserSchedule'; 

 idProfile:number=0;

  constructor(private http: HttpClient) {}

  saveScheduleBulk(schedules: UserSchedule[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/bulk`, schedules);
  }


getSchedulesByDate(date: string): Observable<UserSchedule[]> {
  const params = new HttpParams().set('date', date);  // date = "2025-06-03"
  return this.http.get<UserSchedule[]>(`${this.apiUrl}/by-date`, { params });
}


}