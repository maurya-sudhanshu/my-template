import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss'],
})
export class AdminheaderComponent implements OnInit {
  @ViewChild('open') open: any;
  @ViewChild('closepaytm') closepaytm: any;
  @ViewChild('closephonepe') closephonepe: any;
  @ViewChild('closegooglepay') closegooglepay: any;
  @ViewChild('closeimps') closeimps: any;
  @ViewChild('close') close: any;
  @ViewChild('openIMPS') openIMPS: any;
  hide = true;
  hide2 = true;
  username: any = '';
  balance: any = '';
  payment: any = [];
  new: any = [];
  b: number | undefined;
  id: number | undefined;
  updatedetail!: FormGroup;
  adminchnagepass!: FormGroup;
  constructor(
    private service: AdminService,
    private router: Router,
    private _location: Location,
    private formBuilder: FormBuilder
  ) {
    this.username = sessionStorage.getItem('adminuser');
    this.service.paymentdetails().subscribe((result) => {
      this.payment = result;
    });
  }
  ngOnInit(): void {
    $('.account').click(function () {
      $('#manu2').toggle('slow');
    });
    this.service.adminbalabce().subscribe((result) => {
      this.balance = result;
      this.balance = this.balance[0].balance;
      this.b = this.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    });
    this.updatedetail = this.formBuilder.group({
      acountholdername: ['', Validators.required],
      ifsccode: ['', Validators.required],
      bankname:['', Validators.required],
      accounttype: ['', Validators.required],
      acountyamobilenumber: ['', Validators.required],
      id: ['', Validators.required],
    });
    this.adminchnagepass = this.formBuilder.group({
      newpassword: ['', Validators.required],
      oldpassword: ['', Validators.required],
    });
  }
  logout() {
    sessionStorage.removeItem('adminauth');
    sessionStorage.removeItem('Adminuser');
    window.location.reload();
  }
  open2(data: any) {
    this.service.paymentdetailsedit(data).subscribe((result) => {
      this.new = result;
      console.log(result);
      alert(JSON.stringify(this.new))      
      this.open.nativeElement.click();
    });
  }
  opwn() {
    this.open.nativeElement.click();
  }
  updatedetails(data: any) {
    this.service.updatepaymentdetails(data).subscribe(
      (result) => {
        if (result == true) {
          Swal.fire({
            icon: 'success',
            title: 'Success Fully Change Payment Details',
            timer: 800,
            background: 'black',
            color: 'green',
            showConfirmButton: false,
          });
          this.updatedetail.reset();
          this.router
            .navigateByUrl('/refresh', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([decodeURI(this._location.path())]);
            });
          this.closepaytm.nativeElement.click();
          this.closephonepe.nativeElement.click();
          this.closegooglepay.nativeElement.click();
          this.closeimps.nativeElement.click();
        }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error,
          background: 'black',
          color: 'green',
        });
      }
    );
  }
  changepassword(data: any) {
    this.service.adminchangepassword(data).subscribe(
      (result) => {
        if (result == true) {
          Swal.fire({
            icon: 'success',
            title: 'Success Fully change Password',
            timer: 800,
            background: 'black',
            color: 'green',
            showConfirmButton: false,
          });
        }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error,
          background: 'black',
          color: 'green',
        });
      }
    );
  }
  clickIMPS(){
    this.openIMPS.open();
  }
}
