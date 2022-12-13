import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriveLandingSharedUISwiperComponent } from './swiper.component';

describe('SwiperComponent', () => {
  let component: PriveLandingSharedUISwiperComponent;
  let fixture: ComponentFixture<PriveLandingSharedUISwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriveLandingSharedUISwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriveLandingSharedUISwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
