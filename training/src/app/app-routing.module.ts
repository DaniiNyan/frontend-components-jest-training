import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';
import { TrucksComponent } from './trucks/trucks.component';
import { VehicleShopComponent } from './vehicle-shop/vehicle-shop.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'cars',
    pathMatch: 'full'
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'motorcycles',
    component: MotorcyclesComponent
  },
  {
    path: 'trucks',
    component: TrucksComponent
  },
  {
    path: 'home',
    component: VehicleShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
