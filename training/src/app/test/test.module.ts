import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { VehicleShopService } from '../services/vehicle-shop.service';
import { RouterTestingModule } from '@angular/router/testing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterTestingModule,
    HttpClientTestingModule
  ],
  exports: [
    CommonModule,
    RouterTestingModule,
    HttpClientTestingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class TestModule { }
