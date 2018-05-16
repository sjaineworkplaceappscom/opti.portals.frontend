import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from '../../models/register-req-model';
import { UserManageService } from '../../services/user-manage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerReq: RegisterRequest = new RegisterRequest();
   userType:any='';
   isSuperAdmin:boolean=false;

  constructor(private userService: UserManageService) { }

  ngOnInit() {
    this.registerReq = new RegisterRequest();

    var systemAdmin:any=this.userType=localStorage.getItem('SystemAdmin');

  }

  submit() {
   debugger;
    //this.registerReq. = this.registerReq.email;
    this.userService.registerUser(this.registerReq);
  }

}
