import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpHelper } from '../../../helpers/http.helper';
import { UserManageService } from '../../services/user-manage.service';
import { Router } from '@angular/router';
import { ApplicationState } from '../../helpers/ApplicationState';
import { CommonserviceService } from '../../services/commonservice.service';
import { LoginModel } from '../../models/login-model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  isError: boolean = false;
  constructor(private httpHelper: HttpHelper, private userService: UserManageService, private router: Router, private commonService: CommonserviceService) { }
  userName: string;
  password: string;
  ngOnInit() {
    this.userName = '';
    this.password = '';
  }

  public async login(userName: string, password: string) {
    let userId: string;

    await this.userService.getUserDetails(userName).subscribe(
      userData => {
        // jsonfy response object.
        let resUserData = JSON.parse(userData);
        if (resUserData != undefined && resUserData.length > 0) {
          // Multiteenet 
          if (resUserData.length > 1) {
            ApplicationState.SharedData = resUserData;
            let loginModel: LoginModel = new LoginModel();
            loginModel.AuthData = resUserData;
            loginModel.pwd = password;

            // Pass data to tennant selection component.
            // this.commonService.shareAuthData(loginModel);
            this.commonService.setAuthCurrentValue(loginModel);
            this.router.navigateByUrl('/tenantselection');
          }
          // single tenanat
          else {
            let data = resUserData[0];
            userId = data.LoginUserId;
            this.generateLogintoken(userId, password, userName);

            localStorage.setItem('LoginUserDetail', userData);

            var systemAdmin: any = false;

            if (data != null && data.LoginUserType == 4) {
              systemAdmin = true;
            }
            localStorage.setItem("SystemAdmin", systemAdmin);
          }
        }
      }
    );


  }

  // This is aprivate method to generate access token by using userid and pasword.
  private generateLogintoken(userId: string, password: string, email: string): any {
    let errobj: ErrorObject = new ErrorObject();
    // Generate access token
    this.userService.generateToken(userId, password, errobj).then(
      data => {
        localStorage.setItem('AccessToken', data.access_token);

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
