import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchComponent } from './switch-base.component';

describe('SwitchBaseComponent', () => {
  let component: SwitchComponent<string>;
  let fixture: ComponentFixture<SwitchComponent<string>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchComponent) as ComponentFixture<SwitchComponent<string>>;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectItem should run success with case ', () => {
    it('disabled', () => {
      const emit = spyOn(component.selectedChange, 'emit');
      const option = {
        value: 'option-1',
        label: 'Option 1',
        key: 'option-1',
      };
      component.selectItem(option);
      expect(emit.calls.any()).toBe(false);
      expect(component.selected).toBeUndefined();
    });
    it('un disabled', () => {
      const emit = spyOn(component.selectedChange, 'emit');
      const option = {
        value: 'option-1',
        label: 'Option 1',
        key: 'option-1',
      };
      component.selectItem(option);
      expect(emit.calls.any()).toBe(true);
      expect(component.selected).toBe(option.key);
    });
  });
});
