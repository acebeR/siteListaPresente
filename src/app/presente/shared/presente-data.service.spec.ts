import { TestBed } from '@angular/core/testing';

import { PresenteDataService } from './presente-data.service';

describe('PresenteDataService', () => {
  let service: PresenteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresenteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
