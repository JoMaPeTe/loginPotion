import { TestBed } from '@angular/core/testing';

import { CanActivateViaAuthGuardService } from './can-activate-via-auth-guard.service';

describe('CanActivateViaAuthGuardService', () => {
  let service: CanActivateViaAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateViaAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
