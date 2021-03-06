import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Vehicle {
  constructor(public id: number, public name: string, public side: string) { }
}

@Injectable()
export class VehicleService {
  constructor(private http: Http) { }

  getVehicles(value?: string) {
    return this.http.get('api/vehicles.json')
      .map((response: Response) => <Vehicle[]>response.json().data)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/