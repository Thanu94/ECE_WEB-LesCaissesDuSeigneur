import { Component, OnInit } from '@angular/core';
import { CarsItemsComponent } from '../cars-items/cars-items.component';
import { AppRoutingModule } from '../app.routes';
import { HomePageCarsItemsComponent } from '../home-page-cars-items/home-page-cars-items.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [CarsItemsComponent, HomePageCarsItemsComponent,HttpClientModule,FormsModule],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  GoToCarsItemsPage() {
    this.router.navigateByUrl('/cars');
  }
}
