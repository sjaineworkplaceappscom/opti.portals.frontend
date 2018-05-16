import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingChart1Component } from './shipping-chart-1.component';

describe('ShippingChart1Component', () => {
  let component: ShippingChart1Component;
  let fixture: ComponentFixture<ShippingChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingChart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
