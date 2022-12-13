import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMultipleComponent } from './dropdown-multiple.component';

describe('DropdownMultipleComponent', () => {
  let component: DropdownMultipleComponent;
  let fixture: ComponentFixture<DropdownMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
