import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';


import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { ShipingGridComponent } from './shiping-grid/shiping-grid.component';
// Import the Animations module


// Import the ButtonsModule
// import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { GridModule } from '@progress/kendo-angular-grid';

import { KendoPanelComponent } from './kendo-panel/kendo-panel.component';
import { KendoContentAreaComponent } from './kendo-content-area/kendo-content-area.component';
import { KendoMainContenetAreaComponent } from './kendo-main-contenet-area/kendo-main-contenet-area.component';


import { ShippingChart1Component } from './shipping-chart-1/shipping-chart-1.component';
import { ShippingChart2Component } from './shipping-chart-2/shipping-chart-2.component';
import { CommonserviceService } from './services/commonservice.service';
import { FormsModule } from '@angular/forms';

import 'hammerjs';
import { ShippingChartDhasboardComponent } from './shipping-chart-dhasboard/shipping-chart-dhasboard.component';
import { ShippingChartBarComponent } from './shipping-chart-bar/shipping-chart-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DemoGridComponent } from './demo-grid/demo-grid.component';
import { HttpHelper } from '../helpers/http.helper';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';

import {Routes, RouterModule} from "@angular/router";
import { MainComponent } from './main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { UserManageService } from './services/user-manage.service';
import { CustomerListComponent } from './grid/customer-list/customer-list.component';
import { CustomerUserListComponent } from './grid/customer-user-list/customer-user-list.component';
import { VendorUserListComponent } from './grid/vendor-user-list/vendor-user-list.component';
import { VendorListComponent } from './grid/vendor-list/vendor-list.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { SetPasswordComponent } from './user/set-password/set-password.component';
import { UserListWithStatusComponent } from './administration/user-list-with-status/user-list-with-status.component';
import { TenantselectionComponent } from './user/tenantselection/tenantselection.component';

const routes: Routes = [
  
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: SigninComponent },
  { path: 'home', component: MainComponent,canActivate:[AuthGuard] },
  {path:'resetpassword',component:ResetPasswordComponent},
  {path:'changepassword',component:ChangePasswordComponent,canActivate:[AuthGuard]},
  {path:'setpassword',component:SetPasswordComponent},
  {path:'tenantselection',component:TenantselectionComponent},
  {path:'manageusers',component:UserListWithStatusComponent},
  { path: '', redirectTo: 'login',pathMatch: 'full' },
  {path: '**', component: SigninComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLeftComponent,
    ShipingGridComponent,
    KendoPanelComponent,
    KendoContentAreaComponent,
    KendoMainContenetAreaComponent,
    ShippingChart1Component,
    ShippingChart2Component,
    ShippingChartDhasboardComponent,
    ShippingChartBarComponent,
    DashboardComponent,
    DemoGridComponent,
    SignupComponent,
    SigninComponent,
    MainComponent,
    CustomerListComponent,
    CustomerUserListComponent,
    VendorUserListComponent,
    VendorListComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    SetPasswordComponent,
    UserListWithStatusComponent,
    TenantselectionComponent
  ],
  imports:[BrowserModule,
  // Register the modules
  BrowserAnimationsModule,
  LayoutModule,
  GridModule,
  ChartsModule,
  FormsModule,
  HttpClientModule,
  RouterModule.forRoot(routes)
],
  providers: [CommonserviceService,HttpHelper,AuthGuard,UserManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
