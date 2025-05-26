import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UserSchedule } from '../../../Models/UserSchedule';
import { JwtPayload } from '../../../Models/JwtPayload';
import { jwtDecode } from 'jwt-decode';
import { UserScheduleService } from '../../../Services/user-schedule.service';
import { ButtonModule } from 'primeng/button';

import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-calendar-component',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, Toast],
  providers: [MessageService],
  templateUrl: './calendar-component.component.html',
  styleUrls: ['./calendar-component.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalendarComponentComponent implements OnInit {
  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  hours = Array.from({ length: 19 }, (_, i) => {
    const hour = i + 6;
    return `${hour.toString().padStart(2, '0')}:00`;
  });

  activeSlots: Record<string, string[]> = {};
  userProfilesId = 0;
  baseDate = new Date();

  constructor(private userScheduleService: UserScheduleService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.baseDate = this.getMonday(new Date());

    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      this.userProfilesId = parseInt(decoded.UserProfilesId, 10);
      console.log('UserProfilesId from token:', this.userProfilesId);
    }
  }

  toggleSlot(day: string, hour: string): void {
    if (!this.activeSlots[day]) {
      this.activeSlots[day] = [hour];
    } else {
      const index = this.activeSlots[day].indexOf(hour);
      if (index > -1) {
        this.activeSlots[day].splice(index, 1);
        if (this.activeSlots[day].length === 0) {
          delete this.activeSlots[day];
        }
      } else {
        this.activeSlots[day].push(hour);
      }
    }
  }

  isActive(day: string, hour: string): boolean {
    return this.activeSlots[day]?.includes(hour) ?? false;
  }

  private getDateFromDay(day: string): string {
    const dayIndex = this.days.indexOf(day);
    if (dayIndex === -1) return '';

    const date = new Date(this.baseDate);
    date.setDate(this.baseDate.getDate() + dayIndex);
    return date.toISOString().split('T')[0];
  }

  showSelected(): void {
    const payload: UserSchedule[] = [];

    for (const [day, hours] of Object.entries(this.activeSlots)) {
      const date = this.getDateFromDay(day);

      for (const hour of hours) {
        const [h] = hour.split(':').map(Number);
        const startTime = `${hour}:00`;
        const endTime = `${(h + 1).toString().padStart(2, '0')}:00:00`;

        payload.push({
          UserScheduleId: 0,
          UserProfilesId: this.userProfilesId,
          Date: date,
          StartTime: startTime,
          EndTime: endTime
        });
      }
    }

    console.log('Lista a enviar:', payload);
    this.userScheduleService.saveScheduleBulk(payload).subscribe({
      next: response => {
        console.log('Respuesta del backend:', response);

        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Horarios guardados correctamente',
          life: 3000
        });
      },
      error: error => {
        console.error('Error al guardar horarios:', error);

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al guardar los horarios',
          life: 3000
        });
      }
    });
  }

  getMonday(date: Date): Date {
    const day = date.getDay(); 
    const diff = (day === 0 ? -6 : 1) - day; 
    const monday = new Date(date);
    monday.setDate(date.getDate() + diff);
    monday.setHours(0, 0, 0, 0);
    return monday;
  }
}
