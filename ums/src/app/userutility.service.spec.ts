import { TestBed } from '@angular/core/testing';

import { UserutilityService } from './userutility.service';

describe('UserutilityService', () => {
  let service: UserutilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserutilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
