import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCoinhakoComponent } from './why-coinhako.component';

describe('WhyCoinhakoComponent', () => {
  let component: WhyCoinhakoComponent;
  let fixture: ComponentFixture<WhyCoinhakoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyCoinhakoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyCoinhakoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
