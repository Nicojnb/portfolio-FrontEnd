import { TestBed } from '@angular/core/testing';

import { AchievService } from './achiev.service';

describe('AchievService', () => {
  let service: AchievService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchievService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
