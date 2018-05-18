import { Component, OnInit } from '@angular/core';

import {  Headers, Response, RequestMethod, RequestOptions, ResponseContentType } from '@angular/http';


import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpHelper } from '../../../helpers/http.helper';
import { UpdateDemoModel } from '../../models/update.demo.model';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
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
    var url: string = "http://localhost:55098/vendor/list";
    //var columns: Array<string> = new Array<string>("DemoId", "DemoName");    
    return this.httpHelper.get<Array<any>>(url, null);
 }

}
