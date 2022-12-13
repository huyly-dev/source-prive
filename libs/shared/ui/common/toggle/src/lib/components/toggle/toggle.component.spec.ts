import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponent } from './toggle-base.component';

describe('ToggleBaseComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggle should run success with case ', () => {
    it('disabled', () => {
      const emit = spyOn(component.selectedChange, 'emit');
      component.toggle();
      expect(emit.calls.any()).toBe(false);
      expect(component.selected).toBe(false);
    });
    it('loading', () => {
      const emit = spyOn(component.selectedChange, 'emit');
      component.toggle();
      expect(emit.calls.any()).toBe(false);
      expect(component.selected).toBe(false);
    });
    it('un disabled', () => {
      const emit = spyOn(component.selectedChange, 'emit');
      component.toggle();
      expect(emit.calls.any()).toBe(true);
      expect(component.selected).toBe(true);
    });
  });
});
