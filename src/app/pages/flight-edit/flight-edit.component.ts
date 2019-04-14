import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Flight} from '../../core/api/models/flight';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isEqual} from '../../shared/custom.validator';


@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {

  flight: Flight;
  flightEditForm: FormGroup;

  private validPlanets = [
    'Merkur',
    'Venus',
    'Erde',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptun',
    'Ceres'
  ];

  constructor(private activateRoute: ActivatedRoute, fb: FormBuilder) {
    this.activateRoute.data
      .subscribe(
        data => {
          console.log('data: ', data);
          this.flight = data.flight;
        }
      );
    this.flightEditForm = fb.group({
      from: [this.flight.from, [Validators.required]],
      to: [this.flight.to, [Validators.required]],
      date: this.flight.date
    }, {validatolr: [isEqual(['from', 'to'])]});


  }


  ngOnInit() {

  };


}
