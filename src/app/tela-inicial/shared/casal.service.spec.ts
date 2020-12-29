import { TestBed } from '@angular/core/testing';

import { CasalService } from './casal.service';

describe('CasalService', () => {
  let service: CasalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
