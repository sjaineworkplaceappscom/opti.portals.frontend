import { Injectable } from '@angular/core';

import { HttpHelper } from '../../helpers/http.helper';
import { RegisterRequest } from '../models/register-req-model';
import { Router } from '@angular/router';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UpdateCredentialModel } from '../models/update-credential-req-model';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { ErrorObject } from '../user/signin/signin.component';
import { promise } from 'protractor';
import { UserModel } from '../models/user-model';



@Injectable()
export class UserManageService {

  baseUrl: string = 'http://localhost:55098/';

  constructor(private httpHelper: HttpHelper, private router: Router) { }

  // Register user.
  public registerUser(registerRequest: RegisterRequest) {
    let url: string = this.baseUrl + "account/register";
    //  let reqHeaders=new HttpHeaders({'Access-Control-Allow-Origin':'*'});

    this.httpHelper.post(url, registerRequest, null, true).subscribe(
      data => {
        alert('Congratulations, Your registration request is generated successfully, our team will contact you shortly.')

        // if (navigateLogin) {
        this.router.navigateByUrl('/login');
        //}

      }
    )

  }

  // Register user.
  public resetPassword(userName: string, newPassword: string) {
    let url: string = this.baseUrl + "account/resetpassword";
    let updateCredential: UpdateCredentialModel = new UpdateCredentialModel();
    updateCredential.userName = userName;
    updateCredential.newPassword = newPassword;

    this.httpHelper.post(url, updateCredential, null, true).subscribe(
      data => {
        alert('We have sent you reset password link on your registered email id');

        this.router.navigateByUrl('/login');
      }
    )

  }

  // Register user.
  public setPassword(userModel: UserModel) {
    let url: string = this.baseUrl + "account/setpassword";

    this.httpHelper.post(url, userModel, null, true).subscribe(
      data => {
        alert('Welcome to optipro Portals, your password set successfully.');
        this.router.navigateByUrl('/login');


      }
    )

  }

  // Register user.
  public changePassword(userName: string, oldPassword: string, newPassword: string) {
    let url: string = this.baseUrl + "account/changepassword";
    let updateCredential: UpdateCredentialModel = new UpdateCredentialModel();
    updateCredential.userName = userName;
    updateCredential.newPassword = newPassword;
    updateCredential.oldPassword = oldPassword;

    this.httpHelper.post(url, updateCredential, null, true).subscribe(
      data => {
        alert('We have sent you reset password link on your registered email id');

        this.router.navigateByUrl('/login');

      }
    )

  }
  

  // Login.
  public async generateToken(userName: string, password: string, errobj: ErrorObject): Promise<any> {
    let error: boolean = false;
    let data: string = "username=" + userName + "&password=" + password + "&grant_type=password";
    let reqHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return await this.httpHelper.post<any>(this.baseUrl + 'token', data, reqHeaders, false).toPromise();

  }

  // Get login user detail
  // Login.
  public getUserDetails(userName: string): any {
    let error: boolean = false;
    let data: string = userName;

    return this.httpHelper.put<Array<any>>(this.baseUrl + 'user/loginuser', data, null);
  }

  // Invite users 
  public inviteUsers(userEmails: string) {
    let error: boolean = false;
    let data: string = userEmails

    return this.httpHelper.put<Array<any>>(this.baseUrl + 'user/invite', data, null).subscribe(
      data => {
        alert('User(s) Approved successfully.');
      }
    );


  }

  public getInactiveUsers() {
    return this.httpHelper.get(this.baseUrl + 'user/list/inactive', null);
  }

  public getInvitedUsers() {
    return this.httpHelper.get(this.baseUrl + 'user/list/invited', null);
  }


}
