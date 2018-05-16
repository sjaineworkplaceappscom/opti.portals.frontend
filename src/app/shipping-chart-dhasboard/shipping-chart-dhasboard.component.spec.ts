import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingChartDhasboardComponent } from './shipping-chart-dhasboard.component';

describe('ShippingChartDhasboardComponent', () => {
  let component: ShippingChartDhasboardComponent;
  let fixture: ComponentFixture<ShippingChartDhasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingChartDhasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingChartDhasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
