import { TestBed } from '@angular/core/testing';

import { CarService } from './car.service';
import { TestModule } from '../test/test.module';
import { HttpTestingController } from '@angular/common/http/testing';

describe('CarService', () => {
  let service: CarService;
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [TestModule]
    })
  );

  beforeEach(() => {
    service = TestBed.get(CarService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Load Cars', () => {
    it('Should call cars api', () => {
        service.loadCars();
        const req = httpMock.expectOne({url: 'http://localhost:3000/cars'});
        expect(req.request.method).toBe('GET');
        httpMock.verify();
    });
  });
});
