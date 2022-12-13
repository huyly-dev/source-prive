import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriveCommonAvatarComponent } from './avatar.component';

describe('PriveCommonAvatarComponent', () => {
  let component: PriveCommonAvatarComponent;
  let fixture: ComponentFixture<PriveCommonAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriveCommonAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriveCommonAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
