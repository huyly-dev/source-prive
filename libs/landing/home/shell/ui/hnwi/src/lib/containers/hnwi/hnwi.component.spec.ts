import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnwiComponent } from './hnwi.component';

describe('HnwiComponent', () => {
  let component: HnwiComponent;
  let fixture: ComponentFixture<HnwiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HnwiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HnwiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
