import { Component } from '@angular/core';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  imports: [AdminLoginComponent],
})
export class AdminComponent {}
