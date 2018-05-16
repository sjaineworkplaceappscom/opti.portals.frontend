import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingChart2Component } from './shipping-chart-2.component';

describe('ShippingChart2Component', () => {
  let component: ShippingChart2Component;
  let fixture: ComponentFixture<ShippingChart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingChart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
