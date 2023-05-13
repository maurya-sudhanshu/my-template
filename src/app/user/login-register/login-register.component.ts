import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent implements OnInit {
  hide = true;
  login = false;
  register = false;
  otp = false;
  resendotp = false;
  forget = false;
  newpass = false;
  forgetresendotp = false;
  genratepass = false;
  varify: any | undefined;
  value: any | undefined;
  forgettoken:any |undefined;
  mobile:number | undefined;
  datra: any = {};
  forgetmobile: number | undefined;
  registertion = new FormGroup({
    username: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    referral: new FormControl('', [Validators.required]),
  });
  resendotpp = new FormGroup({
    mobile: new FormControl('', [Validators.required]),
  });
  sendotpdata = new FormGroup({
    otp: new FormControl('', [Validators.required]),
  });
  loginuser = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  forgetpassword = new FormGroup({
    mobile: new FormControl('', [Validators.required]),
  });
  sendottp = new FormGroup({
    otp: new FormControl('', [Validators.required]),
  });
  genpass = new FormGroup({
    newpassword: new FormControl('', [Validators.required]),
  });
  forgetsendottp = new FormGroup({
    otp: new FormControl('', [Validators.required]),
  })
  constructor(
    public dialogRef: MatDialogRef<LoginRegisterComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private service: UserServiceService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.value = data;
  }
  token!: string | null;
  useranmedetail(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (
      charCode == 101 ||charCode == 60 ||charCode == 61 ||charCode == 69 ||charCode == 45 ||charCode == 43 ||charCode == 32 ||
      charCode == 58 ||charCode == 59 ||
      event.target.value.length === 0 && event.key === '0'
    ) {
      return false;
    }
    return true;
  }
  numericOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (
      charCode == 101 ||
      charCode == 69 ||
      charCode == 45 ||
      charCode == 43 ||
      event.target.value.length === 0 && event.key === '0'
    ) {
      return false;
    }
    return true;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    $(document).ready(() => {
      if (this.value == 0) {
        this.register = true;
      } else {
        this.login = true;
      }
    });
  }
  resend() {
    this.otp = false;
    this.resendotp = true;
  }
  registerr() {
    this.login = false;
    this.register = true;
  }
  loginn() {
    this.login = true;
    this.register = false;
  }
  forgetpass() {
    this.login = false;
    this.register = false;
    this.forget = true;
  }
  frogetresend() {
    this.newpass = false;
    this.forgetresendotp = true;
  }
  //REGISTRATION STEP 1ST sendOTP strat
  sendotp(data: any) {
    this.mobile = data.mobile;
    this.datra = data;
    this.service.sendotp(data).subscribe(
      (result) => {
        this.varify = result;
        if (result == true) {
          this.login = false;
          this.register = false;
          this.otp = true;
        }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: JSON.parse(JSON.stringify(err)).error,
          background: '#322a71',
          color: '#fff',
          showConfirmButton: false,
          timer: 2500,
        });
      }
    );
  }
  // sendOTP strat
  //OPTIONAL REGISTRATION STEP 2ND resenotp start
  resendo(data: any) {
    this.mobile = data.mobile;
    this.datra.mobile = data.mobile;
    this.service.sendotp(data).subscribe(
      (result) => {
        if (result == true) {
          this.otp = true;
          this.resendotp = false;
        }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error,
          background: '#322a71',
          color: '#fff',
          showConfirmButton: false,
          timer: 2500,
        });
      }
    );
  }
  //resenotp end
  // REGISTRATION STEP 2ND Verifyotp start
  datasubmit(data: any) {
    this.service.checkotp(JSON.parse(JSON.stringify(data)).otp, this.datra)
      .subscribe(
        (result) => {
           if (JSON.parse(JSON.stringify(result)).status == true) {
            this.service.register(this.datra,JSON.parse(JSON.stringify(result)).token).subscribe(
              (result) => {
                if (result == true) {
                  Swal.fire({
                    icon: 'success',
                    title: 'SuccessFully Registered',
                    background: '#322a71',
                    color: '#fff',
                    showConfirmButton: false,
                    timer: 2000,
                  });
                  this.login = true;
                  this.otp = false;
                }
              },
              (err) => {
                Swal.fire({
                  icon: 'error',
                  background: '#322a71',
                  color: '#fff',
                  title: err,
                });
              }
            );
          }
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            background: '#322a71',
            color: '#fff',
            title: err.error,
          });
        }
      );
  }
  //Verifyotp start
  //login start
  loginuserdata(data: any) {
    this.service.login(data).subscribe(
      (result) => {
        sessionStorage.setItem('auth', JSON.parse(JSON.stringify(result)).token);
        sessionStorage.setItem('token',JSON.parse(JSON.stringify(result)).username);
        sessionStorage.setItem('name',JSON.parse(JSON.stringify(result)).name);
        Swal.fire({
          icon: 'success',
          title: 'Login SuccessFully',
          background: '#322a71',
          color: '#fff',
          showConfirmButton: false,
          timer: 1500,
        });
        this.dialogRef.close();
        this.router.navigate(['/main']);
        setTimeout(function () {
          window.location.reload();
        });
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error,
          background: '#322a71',
          color: '#fff',
          showConfirmButton: false,
          timer: 2500,
        });
      }
    );
  }
  //login end
  //forget password STEP 1st START
  forgett(data: any) {
    this.mobile = data.mobile;
    alert(this.mobile);
    this.service.forgetdotp(data).subscribe(
      (result) => {
        this.forget = false;
        this.newpass = true;
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    );
  }
  //forget password STEP 1st END
  //OPTIONAL RESEND opt STEP 2nd START
  forgetotpresend(data: any) {
    this.mobile = data.mobile;
    this.service.forgetdotp(data).subscribe(
      (result) => {
        this.forget = false;
        this.newpass = true;
        this.forgetresendotp = false;
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    );
  }
  //OPTIONAL RESEND opt STEP 2nd END
  //checkotp forget STEP 2nd START
  forgetcheckotp(data: any) {
    this.service.checkotp(JSON.parse(JSON.stringify(data)).otp, {mobile:this.mobile})
      .subscribe((result) => {
          this.forgettoken = JSON.parse(JSON.stringify(result)).token;
          if (JSON.parse(JSON.stringify(result)).status == true) {
            this.genratepass = true;
            this.newpass = false;
          }
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: err.error,
            showConfirmButton: false,
            timer: 2500,
          });
        }
      );
  }
  //checkotp foget STEP 2nd END
  //change password Successfully STEP 3rd START
  newpassword(data: any) {
     this.service.newpassword(this.mobile, data,this.forgettoken).subscribe(
      (result) => {
        if (result == true) {
          Swal.fire({
            icon: 'success',
            title: 'SuccessFully change Password',
            background: '#322a71',
            color: '#fff',
            showConfirmButton: false,
            timer: 2000,
          });
          this.login = true;
          this.genratepass = false;
        }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          background: '#322a71',
          color: '#fff',
          title: err.error,
        });
      }
    );
  }
  //change password Successfully STEP 3rd END
}
