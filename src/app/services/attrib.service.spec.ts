import { TestBed } from '@angular/core/testing';

import { AttribService } from './attrib.service';

describe('AttribService', () => {
  let service: AttribService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttribService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
