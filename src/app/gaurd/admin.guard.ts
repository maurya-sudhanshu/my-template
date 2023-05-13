import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(): boolean{
    if(sessionStorage.getItem('adminauth') != null){
      return true;
    }else{
      this.route.navigate(['/admin/login']);
      return false;
    }
  }
  
}
