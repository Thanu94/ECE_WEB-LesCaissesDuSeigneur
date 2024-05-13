import { Injectable } from '@angular/core';
import { ICar } from '../models/car.model';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, pipe, tap, throwError } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class carsService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<ICar[]> {
    return this.http.get<ICar[]>('http://localhost:8080/cars');
  }

  getCarByID(carID: number): Observable<ICar> {
    // return this.carsItems.find((singleCar) => singleCar.ID === carID);
    return this.http.get<ICar>(`http://localhost:8080/car/${carID}`);
  }

  createNewCarToSell(newCarDetailsForm: NgForm): Observable<ICar> {
    console.log(newCarDetailsForm);
    // newCarDetailsForm.id = 40;
    return this.http.post<any>('http://localhost:8080/cars', {
      newCarDetailsForm,
    });
  }

  deleteCarById(carID: number): Observable<any> {
    console.log(carID);

    return this.http.delete<any>(`http://localhost:8080/car/${carID}`);
  }
}
