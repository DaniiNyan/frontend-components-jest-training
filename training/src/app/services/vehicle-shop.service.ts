import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle, VehicleType, VehicleFilter } from '../models/vehicle.model';
import { CarService } from './car.service';
import { TruckService } from './truck.service';
import { MotorcycleService } from './motorcycle.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleShopService {

  constructor(
    private carService: CarService,
    private truckService: TruckService,
    private motorcycleService: MotorcycleService
  ) { }

  public loadVehicles(filter: VehicleFilter): Observable<Vehicle[]> {
    switch (filter.type) {
      case VehicleType.CAR: {
        return this.carService.loadCars();
      }
      case VehicleType.TRUCK: {
        return this.truckService.loadTrucks();
      }
      case VehicleType.MOTORCYCLE: {
        return this.motorcycleService.loadMotorcycles();
      }
      default: {
        return null;
      }
    }
  }
}
