import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../services/commonservice.service';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {

  public selectedMenueOption:number=1;
  
    constructor() { }
  
    ngOnInit() {
     
    }

    updateSelection(value:number){
      this.selectedMenueOption=value;
    }
}
