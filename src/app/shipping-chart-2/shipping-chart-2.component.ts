import { Component, OnInit } from '@angular/core';
import { customers } from '../../data/products';

@Component({
  selector: 'app-shipping-chart-2',
  templateUrl: './shipping-chart-2.component.html',
  styleUrls: ['./shipping-chart-2.component.css']
})
export class ShippingChart2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public gridData: any[] = customers;

}
