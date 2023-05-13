import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(): boolean{
    if(sessionStorage.getItem('token') != null){
      return true;
    }else{
      this.route.navigate(['/home']);
      return false;
    }
  }
  
}
