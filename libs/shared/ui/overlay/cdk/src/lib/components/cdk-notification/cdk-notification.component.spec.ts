import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriveOverlayCdkNotificationComponent } from './cdk-notification.component';

describe('PriveOverlayCdkNotificationComponent', () => {
  let component: PriveOverlayCdkNotificationComponent;
  let fixture: ComponentFixture<PriveOverlayCdkNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriveOverlayCdkNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriveOverlayCdkNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
