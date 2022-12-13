import { TestBed } from '@angular/core/testing';

import { LandingCarouselSliderComponentStore } from './swiper.store';

describe('LandingCarouselSliderComponentStore', () => {
  let service: LandingCarouselSliderComponentStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingCarouselSliderComponentStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
