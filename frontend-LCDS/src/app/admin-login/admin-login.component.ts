import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss',
})
export class AdminLoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    alert('Vous êtes bien connecté en tant que ADMIN !');
    this.router.navigateByUrl(`admin/dashboard`);
  }
}
