import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../helpers/ApplicationState';

@Component({
  selector: 'app-tenantselection',
  templateUrl: './tenantselection.component.html',
  styleUrls: ['./tenantselection.component.scss']
})
export class TenantselectionComponent implements OnInit {
  userData:any;
  constructor() { }

  ngOnInit() {
   
    this.userData=ApplicationState.SharedData;
   

  }

  login(user:any){

  }

}
