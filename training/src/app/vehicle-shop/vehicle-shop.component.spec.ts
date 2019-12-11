import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleShopComponent } from './vehicle-shop.component';

describe('VehicleShopComponent', () => {
  let component: VehicleShopComponent;
  let fixture: ComponentFixture<VehicleShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
