import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(next: ActivatedRouteSnapshot,    state: RouterStateSnapshot): boolean {
      
    return this.canActivated();
  }

  private canActivated():boolean{
    let authenticated:boolean=localStorage.getItem('AccessToken')!= null;
    
    
    if(authenticated==false)
    {
     this.router.navigate(['/login']);
    }
    return authenticated;
  }
}
