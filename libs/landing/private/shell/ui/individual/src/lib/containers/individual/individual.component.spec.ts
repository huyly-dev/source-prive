import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriveLandingPrivateShellUIIndividualComponent } from './individual.component';

describe('PriveLandingPrivateShellUIIndividualComponent', () => {
  let component: PriveLandingPrivateShellUIIndividualComponent;
  let fixture: ComponentFixture<PriveLandingPrivateShellUIIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriveLandingPrivateShellUIIndividualComponent]
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriveLandingPrivateShellUIIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
