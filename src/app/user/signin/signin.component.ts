import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpHelper } from '../../../helpers/http.helper';
import { UserManageService } from '../../services/user-manage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  isError: boolean = false;
  constructor(private httpHelper: HttpHelper, private userService: UserManageService, private router: Router) { }
  userName: string;
  password: string;
  ngOnInit() {
    this.userName = '';
    this.password = '';
  }

  public login(userName: string, password: string) {
    let errobj: ErrorObject = new ErrorObject();
    this.userService.login(userName, password, errobj).then(
      data => {
        localStorage.setItem('AccessToken', data.access_token);
        
        localStorage.setItem('LoginUserName', userName);
        
        this.userService.getLoginUserDetails(userName).subscribe(          
          (data:any)=> {
            debugger;
            
         data=  JSON.parse(data);
         localStorage.setItem('LoginUserDetail',JSON.stringify(data));
         var systemAdmin:any=false;
         debugger;
           if(data!=null  && data[0].LoginUserType==4){
           systemAdmin=true;
           }
           localStorage.setItem("SystemAdmin",systemAdmin);
           
          }
        );

        this.router.navigateByUrl('/home');
      }
    ).catch(
      (err: HttpErrorResponse) => {
        this.isError = true;       
      }
    );


  }

}

export class ErrorObject {
  constructor() {

  }
  isError: boolean;
  error: any;
}
