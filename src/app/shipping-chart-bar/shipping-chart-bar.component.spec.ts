import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingChartBarComponent } from './shipping-chart-bar.component';

describe('ShippingChartBarComponent', () => {
  let component: ShippingChartBarComponent;
  let fixture: ComponentFixture<ShippingChartBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingChartBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingChartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
