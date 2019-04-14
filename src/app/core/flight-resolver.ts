import { Injectable } from '@angular/core';
import {Flight} from './api/models/flight';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {FlightResource} from './api/resources/flight.resource';

@Injectable({
  providedIn: 'root'
})
export class FlightResolver implements Resolve<Flight> {

  constructor(private fr: FlightResource) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight> {
    return this.fr.findById(route.params.id);
  };
}
