import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MosaikCarComponent } from './mosaik-car/mosaik-car.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule, DatePipe } from '@angular/common';
import { CarsItemsComponent } from './cars-items/cars-items.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminCarItemsMozaikComponent } from './admin-car-items-mozaik/admin-car-items-mozaik.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    MosaikCarComponent,
    NavbarComponent,
    FooterComponent,
    CommonModule,
    DatePipe,
    CarsItemsComponent,
    HomePageComponent,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ContactUsComponent,
    HttpClientModule,
    AdminLoginComponent,
    AdminCarItemsMozaikComponent,
  ],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
