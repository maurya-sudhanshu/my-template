import { Component, OnInit,HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginRegisterComponent } from '../user/login-register/login-register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
username:any =""
constructor(private dialogref:MatDialog,private router:Router) { }
 
  ngOnInit(): void {
    this.username = sessionStorage.getItem('token');
  }
  header_varible= false;
  login_varible=false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
      this.header_varible= true;
      this.login_varible=true;
    }else{
      this.header_varible= false;
      this.login_varible=false;
    }
  }
  login(){
    this.dialogref.open(LoginRegisterComponent,{data:1, disableClose: true })
  }
  register(){
    this.dialogref.open(LoginRegisterComponent,{data:0, disableClose: true })
  }
  clear(){
    sessionStorage.removeItem('token');
    this.router.navigate(['/home']);
    setTimeout(function () {
      window.location.reload();
    });
  }
}
