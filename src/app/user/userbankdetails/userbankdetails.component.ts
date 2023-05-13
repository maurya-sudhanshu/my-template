import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserServiceService } from 'src/app/service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userbankdetails',
  templateUrl: './userbankdetails.component.html',
  styleUrls: ['./userbankdetails.component.scss'],
})
export class UserbankdetailsComponent implements OnInit {
  @ViewChild('closeIMPS') closeIMPS: any;
  @ViewChild('closepaytm') closepaytm: any;
  @ViewChild('closephonepe') closephonepe: any;
  @ViewChild('closegooglepay') closegooglepay: any;
  @ViewChild('closeUPI') closeUPI: any;
  @ViewChild('right2') right2: any;
  @ViewChild('down2') down2: any;
  @ViewChild('closeshowdata') closeshowdata: any;
  addIMPS = true;
  rightIMPS = false;
  downIMPS = false;
  addpaytm = true;
  addupi = true;
  addphonepe = true;
  addgooglepay = true;
  rightpaytm = false;
  rightupi = false;
  rightphonepe = false;
  rightgooglepay = false;
  downpaytm = false;
  downupi = false;
  downphonepe = false;
  downgooglepay = false;
  buttonIMPS = false;
  buttonpaytm = false;
  buttonupi = false;
  buttonphonepe = false;
  buttongooglepay = false;
  paytmdata = false;
  upidata = false;
  phonepedata = false;
  googlepaydata = false;
  bank =false;
  bankdetails = false;
  right3 = true;
  down3 = false;
  formIMPS!: FormGroup;
  formpaytm!: FormGroup;
  formphonepe!: FormGroup;
  formgooglepay!: FormGroup;
  formupiid!: FormGroup;
  bankdata: any = [];
  bankdatabyid: any = [];
  paytm:any = [];
  phonepe:any = [];
  googlepay:any = [];
  upi:any = [];
  constructor(
    private router: Router,
    private _location: Location,
    private fb: FormBuilder,
    private service: UserServiceService
  ) {
    this.formIMPS = this.fb.group({
      bankname: ['', [Validators.required]],
      anpnuodetails: ['', [Validators.required]],
      ifsc: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z]{4}0[A-Z0-9a-z]{6}$'),
          Validators.maxLength(11),
        ],
      ],
      name: ['', [Validators.required]],
      accounttype: ['Saving'],
      accountty: ['IMPS'],
    });
    this.formpaytm = this.fb.group({
      name: ['', [Validators.required]],
      anpnuodetails: [
        '',
        [
          Validators.required,
          Validators.pattern('^[1-9]{1}[0-9]{9}$'),
          Validators.maxLength(10),
        ],
      ],
      accountty: ['Paytm'],
    });
    this.formphonepe = this.fb.group({
      name: ['', [Validators.required]],
      anpnuodetails: [
        '',
        [
          Validators.required,
          Validators.pattern('^[1-9]{1}[0-9]{9}$'),
          Validators.maxLength(10),
        ],
      ],
      accountty: ['Phone Pe'],
    });
    this.formgooglepay = this.fb.group({
      name: ['', [Validators.required]],
      anpnuodetails: [
        '',
        [
          Validators.required,
          Validators.pattern('^[1-9]{1}[0-9]{9}$'),
          Validators.maxLength(10),
        ],
      ],
      accountty: ['Google Pay'],
    });
    this.formupiid = this.fb.group({
      name: ['', [Validators.required]],
      anpnuodetails: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_]{3,}@[a-zA-Z]{3,}$'),
        ],
      ],
      accountty: ['UPI Id'],
    });
  }
  ngOnInit(): void {
    this.service.getpaymentdetailIMPS().subscribe((result) => {
      this.bankdata = result;
      if(this.bankdata[0] != null){
        this.addIMPS = false;
        this.rightIMPS = true;
      }
    });
    this.service.getpaymentdetailpaytm().subscribe((result) => {
      this.paytm = result;
      if(this.paytm[0] != null){
        this.addpaytm = false;
        this.rightpaytm = true;
      }
    });
    this.service.getpaymentdetailphonepe().subscribe((result) => {
      this.phonepe = result;
      if(this.phonepe[0] != null){
        this.addphonepe = false;
        this.rightphonepe = true;
      }
    });
    this.service.getpaymentdetailgooglepay().subscribe((result) => {
      this.googlepay = result;
      if(this.googlepay[0] != null){
        this.addgooglepay = false;
        this.rightgooglepay = true;
      }
    });
    this.service.getpaymentdetailupi().subscribe((result) => {
      this.upi = result;
      if(this.upi[0] != null){
        this.addupi = false;
        this.rightupi = true;
      }
    });
  }
  reght(){
    this.rightIMPS = false;
    this.downIMPS = true;
    this.bank = true;
    this.buttonIMPS = true;
  }
  dwon(){
    this.rightIMPS = true;
    this.downIMPS = false;
    this.bank = false;
    this.buttonIMPS = false;
  }
  reghtphonepe(){
    this.rightphonepe = false;
    this.downphonepe = true;
    this.phonepedata = true;
    this.buttonphonepe = true;
  }
  dwonphonepe(){
    this.rightphonepe = true;
    this.downphonepe = false;
    this.phonepedata = false;
    this.buttonphonepe = false;
  }
  reghtgooglepay(){
    this.rightgooglepay = false;
    this.downgooglepay = true;
    this.googlepaydata = true;
    this.buttongooglepay = true;
  }
  dwongooglepay(){
    this.rightgooglepay = true;
    this.downgooglepay = false;
    this.googlepaydata = false;
    this.buttongooglepay = false;
  }
  reghtupi(){
    this.rightupi = false;
    this.downupi = true;
    this.upidata = true;
    this.buttonupi = true;
  }
  dwonupi(){
    this.rightupi = true;
    this.downupi = false;
    this.upidata = false;
    this.buttonupi = false;
  }
  reghtpaytm(){
    this.rightpaytm = false;
    this.downpaytm = true;
    this.paytmdata = true;
    this.buttonpaytm = true;
  }
  dwonpaytm(){
    this.rightpaytm = true;
    this.downpaytm = false;
    this.paytmdata = false;
    this.buttonpaytm = false;
  }
  click2(id:number){
    this.service.getpaymentdetailbyid(id).subscribe((result) => {
      this.bankdatabyid = result;
    });
    this.right3 = false;
    this.down3 = true;
    this.bankdetails = true;
  }
  click3(){
    this.right3 = true;
    this.down3 = false;
    this.bankdetails = false;
  }
  get bankname(): any {
    return this.formIMPS.controls['bankname'];
  }
  get accountnumber(): any {
    return this.formIMPS.controls['anpnuodetails'];
  }
  get ifsc(): any {
    return this.formIMPS.controls['ifsc'];
  }
  get holdername(): any {
    return this.formIMPS.controls['name'];
  }
  get paytmname(): any {
    return this.formpaytm.controls['name'];
  }
  get paytmnumber(): any {
    return this.formpaytm.controls['anpnuodetails'];
  }
  get phonepename(): any {
    return this.formphonepe.controls['name'];
  }
  get phonepenumber(): any {
    return this.formphonepe.controls['anpnuodetails'];
  }
  get googlepayname(): any {
    return this.formgooglepay.controls['name'];
  }
  get googlepaynumber(): any {
    return this.formgooglepay.controls['anpnuodetails'];
  }
  get UPIname(): any {
    return this.formupiid.controls['name'];
  }
  get upiid(): any {
    return this.formupiid.controls['anpnuodetails'];
  }
  numericOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (
      charCode == 101 ||
      charCode == 69 ||
      charCode == 45 ||
      charCode == 43 ||
      (event.target.value.length === 0 && event.key === '0')
    ) {
      return false;
    }
    return true;
  }
  submitimps(data: any) {
    if (this.formIMPS.valid) {
      this.service.userdata(data).subscribe((result) => {
        if (result == true) {
          Swal.fire({
            timer: 1200,
            icon: 'success',
            title: 'Your Bank details Send for verification',
            showConfirmButton: false,
            background: 'black',
            color: 'green',
          });
          this.formIMPS.reset();
          this.closeIMPS.nativeElement.click();
          this.router
            .navigateByUrl('/refresh', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([decodeURI(this._location.path())]);
            });
        }
      },err=>{
        Swal.fire({
          icon:'error',
          title:err.error,
          color:'green',
          background:'black'
        })
      });
    }
  }
  submitpaytm(data: any) {
    if (this.formpaytm.valid) {
      this.service.userdata(data).subscribe((result) => {
        if (result == true) {
          Swal.fire({
            timer: 1200,
            icon: 'success',
            title: 'Your Bank details Send for verification',
            showConfirmButton: false,
            background: 'black',
            color: 'green',
          });
          this.formpaytm.reset();
          this.closepaytm.nativeElement.click();
          this.router
            .navigateByUrl('/refresh', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([decodeURI(this._location.path())]);
            });
        }
      },err=>{
        Swal.fire({
          icon:'error',
          title:err.error,
          color:'green',
          background:'black'
        })
      });
    }
  }
  submitphonepe(data: any) {
    if (this.formphonepe.valid) {
      this.service.userdata(data).subscribe((result) => {
        if (result == true) {
          Swal.fire({
            timer: 1200,
            icon: 'success',
            title: 'Your Bank details Send for verification',
            showConfirmButton: false,
            background: 'black',
            color: 'green',
          });
          this.formphonepe.reset();
          this.closephonepe.nativeElement.click();
          this.router
            .navigateByUrl('/refresh', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([decodeURI(this._location.path())]);
            });
        }
      },err=>{
        Swal.fire({
          icon:'error',
          title:err.error,
          color:'green',
          background:'black'
        })
      });
    }
  }
  submitgooglepay(data: any) {
    if (this.formgooglepay.valid) {
      this.service.userdata(data).subscribe((result) => {
        if (result == true) {
          Swal.fire({
            timer: 1200,
            icon: 'success',
            title: 'Your Bank details Send for verification',
            showConfirmButton: false,
            background: 'black',
            color: 'green',
          });
          this.formgooglepay.reset();
          this.closegooglepay.nativeElement.click();
          this.router
            .navigateByUrl('/refresh', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([decodeURI(this._location.path())]);
            });
        }
      },err=>{
        Swal.fire({
          icon:'error',
          title:err.error,
          color:'green',
          background:'black'
        })
      });
    }
  }
  submitUPI(data: any) {
    if (this.formupiid.valid) {
      this.service.userdata(data).subscribe((result) => {
        if (result == true) {
          Swal.fire({
            timer: 1200,
            icon: 'success',
            title: 'Your Bank details Send for verification',
            showConfirmButton: false,
            background: 'black',
            color: 'green',
          });
          this.formupiid.reset();
          this.closeUPI.nativeElement.click();
          this.router
            .navigateByUrl('/refresh', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([decodeURI(this._location.path())]);
            });
        }
      },err=>{
        if(err.error){
        Swal.fire({
          icon:'error',
          title:'UPI Id is already exist',
          color:'green',
          background:'black'
        })}
      });
    }
  }
  delete(id:number){
    this.service.delpaymentdetailbyid(id).subscribe((result) => {
      if(result == true){
        this.closeshowdata.nativeElement.click();
        this.router
        .navigateByUrl('/refresh', { skipLocationChange: true })
        .then(() => {
          this.router.navigate([decodeURI(this._location.path())]);
        });
      }
    });
  }
  delete2(id:number){
    this.service.delpaymentdetailbyid2(id).subscribe((result) => {
      if(result == true){
        this.closeshowdata.nativeElement.click();
        this.router
        .navigateByUrl('/refresh', { skipLocationChange: true })
        .then(() => {
          this.router.navigate([decodeURI(this._location.path())]);
        });
      }
    });
  }
}
