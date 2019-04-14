import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flight} from '../../../../core/api/models/flight';
import {Router} from '@angular/router';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

  @Input() flight: Flight;
  @Input() selected: boolean;
   @Output() selectedChange = new EventEmitter();

  constructor(private router: Router) { }

  toggleSelected() {
    this.selectedChange.emit(this.flight.id);
  }

  navigateToFlightEdit() {
    this.router.navigate(['/flight-edit', this.flight.id, {details: true}])
  }

  ngOnInit() {
  }

}
