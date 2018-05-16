import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateCredentialModel } from '../models/update-credential-req-model';
import { UserManageService } from '../services/user-manage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private userService: UserManageService) { }
  updateCredential: UpdateCredentialModel = new UpdateCredentialModel();
  ngOnInit() {
    this.updateCredential = new UpdateCredentialModel();
  }

  signOut() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  changePassword(userName: string, oldPassword: string, newPassword: string) {
    this.userService.changePassword(userName, oldPassword, newPassword);
  }

}
