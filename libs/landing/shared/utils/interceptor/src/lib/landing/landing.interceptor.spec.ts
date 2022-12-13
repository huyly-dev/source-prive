import { TestBed } from '@angular/core/testing';

import { LandingInterceptor } from './landing.interceptor';

describe('LandingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LandingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LandingInterceptor = TestBed.inject(LandingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
