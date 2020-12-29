import { TestBed } from '@angular/core/testing';

import { CasalDataService } from './casal-data.service';

describe('CasalDataService', () => {
  let service: CasalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
