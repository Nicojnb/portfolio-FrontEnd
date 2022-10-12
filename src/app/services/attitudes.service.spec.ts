import { TestBed } from '@angular/core/testing';

import { AttitudesService } from './attitudes.service';

describe('AttitudesService', () => {
  let service: AttitudesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttitudesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
