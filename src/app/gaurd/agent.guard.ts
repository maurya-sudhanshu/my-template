import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AgentGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(): boolean{
    if(sessionStorage.getItem('adminuser') == "Admin" ){
      return true;
    }else{
      this.route.navigate(['/admin/deshboard']);
      return false;
    }
  }
}
