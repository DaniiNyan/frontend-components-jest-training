import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleShopComponent } from './vehicle-shop.component';
import { TestModule } from '../test/test.module';
import { VehicleShopService } from '../services/vehicle-shop.service';
import { of, Observable, throwError } from 'rxjs';

describe('VehicleShopComponent', () => {
  let component: VehicleShopComponent;
  let service: VehicleShopService;
  let fixture: ComponentFixture<VehicleShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [VehicleShopComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleShopComponent);
    component = fixture.componentInstance;
    service = TestBed.get(VehicleShopService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Load Vehicles', () => {
    it('Should request vehicles', () => {
      jest.spyOn(service, 'loadVehicles').mockReturnValue(of([{}]));
      component.loadVehicles();
      expect(service.loadVehicles).toHaveBeenCalled();
    });

    it('Should set vehicles on vehicles list', () => {
      jest.spyOn(service, 'loadVehicles').mockReturnValue(of([{}]));
      component.loadVehicles();
      expect(component.vehicles).toEqual([{}]);
    });

    it('Should keep empty list on error', () => {
      jest.spyOn(window, 'alert').mockImplementation(() => {});
      jest.spyOn(service, 'loadVehicles').mockReturnValue(throwError(new Error()));
      component.vehicles = [{}];
      component.loadVehicles();
      expect(component.vehicles).toEqual([]);
    });

    it('Should show message when an error happens', () => {
      jest.spyOn(service, 'loadVehicles').mockReturnValue(throwError(new Error()));
      jest.spyOn(window, 'alert').mockImplementation(() => {});
      component.loadVehicles();
      expect(window.alert).toHaveBeenCalled();
    });
  });
});
