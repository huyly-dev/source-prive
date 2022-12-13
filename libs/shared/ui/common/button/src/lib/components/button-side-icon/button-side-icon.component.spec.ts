import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSideIconComponent } from './button-side-icon.component';

describe('ButtonSideIconComponent', () => {
  let component: ButtonSideIconComponent;
  let fixture: ComponentFixture<ButtonSideIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSideIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSideIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
