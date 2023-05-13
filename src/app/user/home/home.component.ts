import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username:any =""
  constructor(private dialogref:MatDialog) { }

  ngOnInit(): void {
    AOS.init();
  }
  login(){
    this.dialogref.open(LoginRegisterComponent,{data:1, disableClose: true })
  }
}
