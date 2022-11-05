import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardeComponent } from './carde.component';

describe('CardeComponent', () => {
  let component: CardeComponent;
  let fixture: ComponentFixture<CardeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
