import { Component, OnInit } from '@angular/core';
import { ApplicationState } from '../../helpers/ApplicationState';
import { ErrorObject } from '../signin/signin.component';
import { UserManageService } from '../../services/user-manage.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonserviceService } from '../../services/commonservice.service';

@Component({
  selector: 'app-tenantselection',
  templateUrl: './tenantselection.component.html',
  styleUrls: ['./tenantselection.component.scss']
})
export class TenantselectionComponent implements OnInit {
  userData: any;
  isError: boolean = false;
  authSharedData: any;
  constructor(private userService: UserManageService, private router: Router, private CommonserviceService: CommonserviceService) { 
   
  }

  ngOnInit() {
    this.userData = ApplicationState.SharedData;
    this.CommonserviceService.authCurrentValue.subscribe(
      authSharedData => {
        debugger;
        this.authSharedData = authSharedData;
      }
    );
   
  }

  login(user: any) {
        
    this.generateLogintoken(user.LoginUserId, this.authSharedData.pwd, user.LoginEmail);

    localStorage.setItem('LoginUserDetail', this.userData);

    var systemAdmin: any = false;

    // if (data != null && data.LoginUserType == 4) {
    //   systemAdmin = true;
    // }

    localStorage.setItem("SystemAdmin", systemAdmin);

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
