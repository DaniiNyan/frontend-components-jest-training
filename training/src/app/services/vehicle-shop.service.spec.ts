import { TestBed } from '@angular/core/testing';

import { VehicleShopService } from './vehicle-shop.service';
import { TestModule } from '../test/test.module';
import { HttpTestingController } from '@angular/common/http/testing';
import { CarService } from './car.service';
import { of } from 'rxjs';
import { VehicleType } from '../models/vehicle.model';
import { TruckService } from './truck.service';
import { MotorcycleService } from './motorcycle.service';

let service: VehicleShopService;
let carService: CarService;
let truckService: TruckService;
let motorcycleService: MotorcycleService;

describe('VehicleShopService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ TestModule ]
  }));

  beforeEach(() => {
    carService = TestBed.get(CarService);
    truckService = TestBed.get(TruckService);
    service = TestBed.get(VehicleShopService);
    motorcycleService = TestBed.get(MotorcycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Load Vehicles', () => {
    it('Should load cars', () => {
      jest.spyOn(carService, 'loadCars').mockReturnValue(of([{}]));
      service.loadVehicles({ type: VehicleType.CAR });
      expect(carService.loadCars).toHaveBeenCalled();
    });

    it('Should load trucks', () => {
      jest.spyOn(truckService, 'loadTrucks').mockReturnValue(of([{}]));
      service.loadVehicles({ type: VehicleType.TRUCK });
      expect(truckService.loadTrucks).toHaveBeenCalled();
    });

    it('Should load motorcycle', () => {
      jest.spyOn(motorcycleService, 'loadMotorcycles').mockReturnValue(of([{}]));
      service.loadVehicles({ type: VehicleType.MOTORCYCLE });
      expect(motorcycleService.loadMotorcycles).toHaveBeenCalled();
    });

    it('Should load motorcycle data', (done) => {
      jest.spyOn(motorcycleService, 'loadMotorcycles').mockReturnValue(of([{}]));
      const obs = service.loadVehicles({ type: VehicleType.MOTORCYCLE });
      obs.subscribe((res) => {
        expect(res).toEqual([{}]);
        done();
      });
    });

    it('Should load car data', (done) => {
      jest.spyOn(carService, 'loadCars').mockReturnValue(of([{}]));
      const obs = service.loadVehicles({ type: VehicleType.CAR });
      obs.subscribe((res) => {
        expect(res).toEqual([{}]);
        done();
      });
    });

    it('Should load truck data', (done) => {
      jest.spyOn(truckService, 'loadTrucks').mockReturnValue(of([{}]));
      const obs = service.loadVehicles({ type: VehicleType.TRUCK });
      obs.subscribe((res) => {
        expect(res).toEqual([{}]);
        done();
      });
    });
  });
});
