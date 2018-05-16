import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-kendo-main-contenet-area',
  templateUrl: './kendo-main-contenet-area.component.html',
  styleUrls: ['./kendo-main-contenet-area.component.css']
})
export class KendoMainContenetAreaComponent implements OnInit {
  public selectedMenueOption:number=1;

  constructor(private commonserviceService:CommonserviceService) { }

  ngOnInit() {
    this.commonserviceService.commonData$.subscribe(
      data=>{
          this.selectedMenueOption=data;
      }
    );
  }

  ngOnChange(){
   
  }


}
