import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriveLandingOtcShellUIWhyTradingComponent } from './why-trading.component';

describe('PriveLandingOtcShellUIWhyTradingComponent', () => {
  let component: PriveLandingOtcShellUIWhyTradingComponent;
  let fixture: ComponentFixture<PriveLandingOtcShellUIWhyTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriveLandingOtcShellUIWhyTradingComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriveLandingOtcShellUIWhyTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
