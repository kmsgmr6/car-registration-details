import { TestBed } from '@angular/core/testing';

import { RegistrationListService } from './registration-list.service';

describe('RegistrationListService', () => {
  let service: RegistrationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
