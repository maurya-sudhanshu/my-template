import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Splide from '@splidejs/splide';
import { VideoComponent } from 'src/app/video/video/video.component';
import { DepositComponent } from '../payment/deposit/deposit.component';
import { WithdrawalComponent } from '../payment/withdrawal/withdrawal.component';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss'],
})
export class Main2Component implements OnInit {
  username: any = '';
  balance: any = '';
  loginbox = true;
  constructor(
    private dialogref: MatDialog,
    private route: Router,
    private service: UserServiceService
  ) {
    jQuery(document).ready(function ($) {
      $('.card .1').click(function () {
        $(this).closest('.card').toggleClass('flip');
      });
    });
    this.service.getbalance().subscribe((result) => {
      this.balance = result;
    });
  }
  header_varible = false;
  left_varible = false;
  inview(data: any) {
    data.scrollIntoView({behavior:'smooth',block:'start',inline:'start'});
  }
  @HostListener('document:scroll')
  scrollfunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 0
    ) {
      this.header_varible = true;
      this.left_varible = true;
    } else {
      this.left_varible = false;
      this.header_varible = false;
    }
  }
  ngOnInit() {
    $('.hideshow').click(function () {
      $('#manu').toggle('slow');
    });
    var splide = new Splide('.splide', {
      perPage: 3,
      perMove: 1,
    });
    splide.mount();
    // this.username = sessionStorage.getItem('token')
    this.username = sessionStorage.getItem('token');
    console.log(sessionStorage.getItem('token'));
    console.log('jedc ' + this.username);
  }
  leave() {
    sessionStorage.removeItem('token');
    this.route.navigate(['/home']);
  }
  openvideo() {
    this.dialogref.open(VideoComponent, { data: 1, disableClose: true });
  }
  openvideo1() {
    this.dialogref.open(VideoComponent, { data: 2, disableClose: true });
  }
  openvideo2() {
    this.dialogref.open(VideoComponent, { data: 3, disableClose: true });
  }
  Deposit() {
    this.dialogref.open(DepositComponent, { data: 1, disableClose: true });
  }
  withdrawal() {
    this.dialogref.open(WithdrawalComponent, { data: 1, disableClose: true });
  }
  bankdetails() {
    this.route.navigate(['/bankdetails']);
  }
}
