import { TestBed } from '@angular/core/testing';

import { FlightResolver } from './flight-resolver';

describe('FlightResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightResolver = TestBed.get(FlightResolver);
    expect(service).toBeTruthy();
  });
});
