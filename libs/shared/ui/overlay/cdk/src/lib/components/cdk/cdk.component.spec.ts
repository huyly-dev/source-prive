import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkComponent } from './cdk-base.component';

describe('CdkBaseComponent', () => {
  let component: CdkComponent;
  let fixture: ComponentFixture<CdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
