import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICar } from '../models/car.model';
import { carsService } from '../services/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-profile',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './car-profile.component.html',
  styleUrl: './car-profile.component.scss',
})
export class CarProfileComponent implements OnInit {
  singleCar$!: Observable<ICar>;
  annonceDate = new Date().toLocaleDateString();
  constructor(
    private carsItemsService: carsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const currentCarID = +this.route.snapshot.params['id'];
    this.singleCar$ = this.carsItemsService.getCarByID(currentCarID);
  }
}
