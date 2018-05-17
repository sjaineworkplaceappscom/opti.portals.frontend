import { Component, OnInit } from '@angular/core';
import { products } from '../../data/products';
import { PageChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { Headers, Response, RequestMethod, RequestOptions, ResponseContentType } from '@angular/http';


import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-shiping-grid',
  templateUrl: './shiping-grid.component.html',
  styleUrls: ['./shiping-grid.component.css']
})
export class ShipingGridComponent implements OnInit {

  constructor(private http: HttpClient) {
    // this.getData().subscribe(
    //   data=> {
    //     debugger;
    //     this.items=JSON.parse(data,null);
        
    //   });
    
      this.loadItems();
    
  }

  ngOnInit() {
  }
  //public gridData: any[] = products;

  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  private data: Object[];

  private items: any= products;

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    
    this.gridView = {
      
      data: this.items.slice(this.skip, this.skip + this.pageSize),
      total: this.items.length
    };
  }

  private getData(): Observable<any> {
    var url: string = "http://localhost:55098/demoentity/list";
    var columns: Array<string> = new Array<string>("DemoId", "DemoName");
    var requestOptions: RequestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    // Add default header 
    requestOptions.headers.append('Content-Type', 'application/json');
    requestOptions.headers.append('Accept', 'application/json');

    // Add reqeust method 
    requestOptions.method = RequestMethod.Get;
    // return this.http.get(url, null)
    //   .map((res: Response) => {
        
    //     this.items =JSON.parse(res.json());
    //     return res.json();

    //   });

    return this.http.get<any>(url,null);

  }



}
