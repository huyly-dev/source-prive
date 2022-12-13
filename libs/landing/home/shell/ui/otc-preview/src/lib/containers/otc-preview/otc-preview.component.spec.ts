import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtcPreviewComponent } from './otc-preview.component';

describe('OtcPreviewComponent', () => {
  let component: OtcPreviewComponent;
  let fixture: ComponentFixture<OtcPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtcPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtcPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
