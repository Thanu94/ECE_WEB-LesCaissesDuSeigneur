import { Component, OnInit } from '@angular/core';
import { AdminCarItemsMozaikComponent } from '../admin-car-items-mozaik/admin-car-items-mozaik.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICar } from '../models/car.model';
import { carsService } from '../services/cars.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-interface',
  standalone: true,
  templateUrl: './admin-interface.component.html',
  styleUrl: './admin-interface.component.scss',
  imports: [AdminCarItemsMozaikComponent, CommonModule, FormsModule],
})
export class AdminInterfaceComponent implements OnInit {
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
