import { Component, OnInit } from '@angular/core';
import { MosaikCarComponent } from '../mosaik-car/mosaik-car.component';
import { ICar } from '../models/car.model';
import { carsService } from '../services/cars.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page-cars-items',
  standalone: true,
  templateUrl: './home-page-cars-items.component.html',
  styleUrl: './home-page-cars-items.component.css',
  imports: [MosaikCarComponent, CommonModule, HttpClientModule, FormsModule],
})
export class HomePageCarsItemsComponent implements OnInit {
  homePageCarsItems$!: Observable<ICar[]>;
  constructor(private carsItemsService: carsService) {}

  ngOnInit(): void {
    this.homePageCarsItems$ = this.carsItemsService.getAllItems().pipe(
      map((items) => items.slice(0, 3)) // slice pour limiter à trois éléments
    );
  }
}
