import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpClient
  ) { }

  public loadCars(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>('http://localhost:3000/cars');
  }
}
