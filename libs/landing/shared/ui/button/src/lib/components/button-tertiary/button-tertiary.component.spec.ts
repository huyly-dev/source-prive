import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTertiaryComponent } from './button-tertiary.component';

describe('ButtonTertiaryComponent', () => {
  let component: ButtonTertiaryComponent;
  let fixture: ComponentFixture<ButtonTertiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonTertiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTertiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
