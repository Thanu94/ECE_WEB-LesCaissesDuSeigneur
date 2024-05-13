import { Component, OnInit } from '@angular/core';
import { MosaikCarComponent } from '../mosaik-car/mosaik-car.component';
import { ICar } from '../models/car.model';
import { CommonModule } from '@angular/common';
import { carsService } from '../services/cars.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars-items',
  standalone: true,
  templateUrl: './cars-items.component.html',
  styleUrl: './cars-items.component.scss',
  imports: [MosaikCarComponent, CommonModule, HttpClientModule, FormsModule],
})
export class CarsItemsComponent implements OnInit {
  // carsItems!: ICar[];
  carsItems$!: Observable<ICar[]>;
  constructor(
    private carsItemsService: carsService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.carsItems$ = this.carsItemsService.getAllItems();

    console.log(this.carsItems$);
  }
}
