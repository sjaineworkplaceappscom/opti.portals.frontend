import { Component, OnInit } from '@angular/core';
import { UserManageService } from '../../services/user-manage.service';

@Component({
  selector: 'app-user-list-with-status',
  templateUrl: './user-list-with-status.component.html',
  styleUrls: ['./user-list-with-status.component.scss']
})
export class UserListWithStatusComponent implements OnInit {
  private items: Array<any>;
  private approveList:any;
  public mySelection: number[] = [];
  constructor(private userManage: UserManageService) {
    this.userManage.getInactiveUsers().subscribe(
      (data: any) => {
        this.items = JSON.parse(data, null);
      }
    );
  }

  ngOnInit() {

  }

  approveUsers(){
      
    this.userManage.inviteUsers(this.mySelection.toString());
    
  }

}
