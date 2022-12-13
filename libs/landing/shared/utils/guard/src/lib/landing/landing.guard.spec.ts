import { TestBed } from '@angular/core/testing';

import { PriveLandingGuard } from './landing.guard';

describe('PriveLandingGuard', () => {
  let guard: PriveLandingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PriveLandingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
