export interface Vehicle {

}

export enum VehicleType {
  CAR,
  TRUCK,
  MOTORCYCLE
}

export interface VehicleFilter {
  type: VehicleType;
}
