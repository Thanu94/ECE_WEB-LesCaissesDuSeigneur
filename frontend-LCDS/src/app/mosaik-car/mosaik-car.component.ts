import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../models/car.model';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mosaik-car',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './mosaik-car.component.html',
  styleUrl: './mosaik-car.component.scss',
})
export class MosaikCarComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() car!: ICar;

  ngOnInit(): void {}

  openAnnonce(carID: number) {
    console.log('CAR ID : ', carID);
    console.log('CURRETN CAR : ', this.car);

    this.router.navigateByUrl(`/cars/${carID}`);
  }
}
