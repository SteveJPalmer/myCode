import { Component } from '@angular/core';

import { Vehicle, VehicleService } from './vehicle.service';

@Component({
  moduleId: module.id,
  selector: 'my-vehicle-list',
   templateUrl: './vehicle-list.component.html',
  styles: ['li {cursor: pointer;} .error {color:red;}']
})
export class VehicleListComponent {
  errorMessage: string;
  selectedVehicle: Vehicle;
  vehicles: Promise<Vehicle[]>;

  constructor(private vehicleService: VehicleService) { }

  getVehicles(value?: string) {
    this.vehicles = this.vehicleService.getVehicles(value);
  }

  ngOnInit() { this.getVehicles(); }

  select(vehicle: Vehicle) {
    this.selectedVehicle = vehicle;
  }
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/