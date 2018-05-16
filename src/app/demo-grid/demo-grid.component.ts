import { Component, OnInit, ViewChild } from '@angular/core';
import {  Headers, Response, RequestMethod, RequestOptions, ResponseContentType } from '@angular/http';


import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { HttpHelper } from '../../helpers/http.helper';
import { UpdateDemoModel } from '../models/update.demo.model';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-demo-grid',
  templateUrl: './demo-grid.component.html',
  styleUrls: ['./demo-grid.component.scss']
})
export class DemoGridComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
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

  private updateDemo(val: string, grid: any) {
    var url: string = "http://localhost:55098/demoentity";

    var updateDemo: UpdateDemoModel = new UpdateDemoModel();
    updateDemo.Id = "ED2E5909-7C7C-4970-999C-5B6F6A0C5C85";
    updateDemo.Name = val;

    //let headers = new HttpHeaders();
    //let reqOption: RequestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headers });
    this.httpHelper.put<any>(url, updateDemo, null).subscribe(
      data => {
        let idx: number = this.items.findIndex(i => i.DemoId == data.DemoId);
        this.items[idx].DemoName = JSON.parse(JSON.stringify(data), null).DemoName;

        this.reload();
      }
    );

  }

  private removeDemo(event:any){
    
    // var item =this.items[event.rowIndex];
    // var url: string = "http://localhost:55098/demoentity/deletedemo"+item.DemoId;
    // let headers = new Headers();
    // let reqOption: RequestOptions = new RequestOptions({ method: RequestMethod.Delete, headers: headers });
    //   this.httpHelper.delete(url,reqOption).subscribe(
    //     data=> {
    //       //let idx: number = this.items.findIndex(i => i.DemoId == data.DemoId);
    //       this.items.splice(rowIndex,1);
    //       this.reload();
    //     }
    //   );
      
  }

  reload() {
    this.items = this.items.splice(0, 10);
    this.dataBinding.skip = 0;
  }



}
