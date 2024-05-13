import { Component, OnInit } from '@angular/core';
import { ISellFormDetails } from '../models/sellFormDetails.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ICar } from '../models/car.model';
import { carsService } from '../services/cars.service';

@Component({
  selector: 'app-sell-car',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, FormsModule],
  templateUrl: './sell-car.component.html',
  styleUrl: './sell-car.component.scss',
})
export class SellCarComponent implements OnInit {
  newCarDetails: ICar = {
    id: 40,
    model: '',
    brand: '',
    year: 0,
    imageURL: '',
    description: '',
    mileage: 0,
    price: 0,
    color: 0,
    sellerLastName: '',
    sellerFirstName: '',
    sellerPhoneNo: '',
    sellerMail: '',
  };

  constructor(private carsItemsService: carsService) {}

  ngOnInit(): void {}

  onSubmitSellForm(form: NgForm) {
    console.log(form.value);
    this.carsItemsService.createNewCarToSell(form.value);
  }
}
