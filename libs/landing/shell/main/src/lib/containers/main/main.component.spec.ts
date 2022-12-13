import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriveLandingShellMainComponent } from './main.component';

describe('PriveLandingShellMainComponent', () => {
  let component: PriveLandingShellMainComponent;
  let fixture: ComponentFixture<PriveLandingShellMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriveLandingShellMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriveLandingShellMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
