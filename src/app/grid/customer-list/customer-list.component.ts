import { Component, OnInit } from '@angular/core';

import {  Headers, Response, RequestMethod, RequestOptions, ResponseContentType } from '@angular/http';


import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpHelper } from '../../../helpers/http.helper';
import { UpdateDemoModel } from '../../models/update.demo.model';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  private items: Array<any>;
  
  constructor(private http: HttpClient, private httpHelper: HttpHelper) {
    this.getData().subscribe(
      data => {        
        this.items = JSON.parse(data, null);
        
      });
  }

  ngOnInit() {
  }

  private getData(): Observable<any> {
    var url: string = "http://localhost:55098/customer/list";
    //var columns: Array<string> = new Array<string>("DemoId", "DemoName");    
    return this.httpHelper.get<Array<any>>(url, null);
 }

}
