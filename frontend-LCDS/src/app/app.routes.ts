import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsItemsComponent } from './cars-items/cars-items.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarProfileComponent } from './car-profile/car-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cars', component: CarsItemsComponent },
  { path: 'cars/:id', component: CarProfileComponent },
  { path: 'sell', component: SellCarComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'admin/login', component: AdminComponent },
  { path: 'admin/dashboard', component: AdminInterfaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
