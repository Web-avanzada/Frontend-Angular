import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserSchedule } from '../../../../Models/UserSchedule';
import { UserScheduleService } from '../../../../Services/user-schedule.service';
import { CalendarModule } from 'primeng/calendar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-user-schedule',
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    ButtonModule,
    CardModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './user-schedule.component.html',
  styleUrl: './user-schedule.component.css'
})
export class UserScheduleComponent {
selectedDate: string = '';
  schedules: UserSchedule[] = [];

  constructor(private scheduleService: UserScheduleService) {}
searchByDate() {
  if (!this.selectedDate) return;

  const dateObj = new Date(this.selectedDate);

  // Solo la parte de fecha sin la hora
  const formattedDate = dateObj.toISOString().split('T')[0];  // "YYYY-MM-DD"

  console.log("formattedDate = ", formattedDate);

  this.scheduleService.getSchedulesByDate(formattedDate).subscribe(data => {
     
      this.schedules = data.map((item: any) => ({
        UserScheduleId: item.userScheduleId,
        UserProfilesId: item.userProfilesId,
        Date: item.date,
        StartTime: item.startTime,
        EndTime: item.endTime
      }));
    });
  }
}