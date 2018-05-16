import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserManageService } from '../../services/user-manage.service';
import { UserModel } from '../../models/user-model';
import { UserListWithStatusComponent } from '../../administration/user-list-with-status/user-list-with-status.component';


@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  userId: string;
  userLoginEmail: string;
  userModel: UserModel = new UserModel();
  constructor(private route: ActivatedRoute, private userService: UserManageService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      param => {
        //this.userId=param['userId'];
        this.userLoginEmail = param['userLoginEmail'];
      }
    );

  }

  setPassword() {
    this.userModel.UserName = this.userModel.Email = this.userLoginEmail;
    this.userService.setPassword(this.userModel);
  }


}
