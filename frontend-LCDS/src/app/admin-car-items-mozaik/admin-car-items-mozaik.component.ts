import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICar } from '../models/car.model';
import { carsService } from '../services/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-car-items-mozaik',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './admin-car-items-mozaik.component.html',
  styleUrl: './admin-car-items-mozaik.component.scss',
})
export class AdminCarItemsMozaikComponent implements OnInit {
  @Input() car!: ICar;

  constructor(public router: Router, private carsItemsService: carsService) {}

  ngOnInit(): void {}

  openAnnonce(carID: number) {
    console.log('CAR ID : ', carID);
    console.log('CURRETN CAR : ', this.car);

    this.router.navigateByUrl(`/cars/${carID}`);
  }

  deleteCar(carID: number) {
    // if (confirm("Etes vous sûr de vouloir supprimer l'annonce ?")) {
    //   const o = this.carsItemsService.deleteCarById(carID);
    //   alert("L'annonce a bien été supprimée ! ");
    // } else {
    //   console.log('Thing was not saved to the database.');
    // }
    console.log(carID);

    this.carsItemsService.deleteCarById(carID);
  }
}
