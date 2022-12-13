import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LozengesComponent } from './lozenges-base.component';

describe('LozengesBaseComponent', () => {
  let component: LozengesComponent;
  let fixture: ComponentFixture<LozengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LozengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LozengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
