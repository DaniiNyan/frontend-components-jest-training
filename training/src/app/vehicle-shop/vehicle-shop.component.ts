import { Component, OnInit } from '@angular/core';
import { VehicleShopService } from '../services/vehicle-shop.service';
import { Vehicle, VehicleFilter, VehicleType } from '../models/vehicle.model';

@Component({
  selector: 'app-vehicle-shop',
  templateUrl: './vehicle-shop.component.html',
  styleUrls: ['./vehicle-shop.component.scss']
})
export class VehicleShopComponent {

  public vehicles: Vehicle[] = [];
  public filters: VehicleFilter = {
    type: VehicleType.CAR
  };

  constructor(
    private vehicleShopService: VehicleShopService
  ) { }

  loadVehicles() {
    this.vehicleShopService.loadVehicles(this.filters)
      .subscribe({
        next: vehicle => {
          this.vehicles = vehicle;
        },
        error: () => {
          this.vehicles = [];
          alert('Desculpe, ocorreu um erro inesperado. Tente novamente mais tarde.');
        }
      });
  }

}
