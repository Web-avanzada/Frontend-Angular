import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../Components/sidebar/sidebar.component';
import { StudentFormComponent } from '../../Components/student-form/student-form.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, SidebarComponent, StudentFormComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent {}
