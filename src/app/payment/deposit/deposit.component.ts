import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/service/user-service.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  step1st = true;
  step2nd = false;
  postdata!: FormGroup;
  amount: any = '';
  submi = false;
  image: any = '';
  depositform!: FormGroup;
  username: any = '';
  paytmdetil = true;
  phonepedetails = false;
  googlepaydetail = false;
  impsdetail = false;
  payment: any = [];
  balance:any="";
  payment_method:any="";
  account_holder_name:any="";
  ifsc_code:any="";
  account_phone_number:any="";
  type_deposit="Deposit";
  name:any="";
  paytmdetils = true;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DepositComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private service: UserServiceService,
    private toastr: ToastrService
  ) {
    this.service.getpaymentdetails(1).subscribe((result) => {
      this.payment = result;
      this.payment_method = this.payment[0].payment_method;
      this.account_holder_name = this.payment[0].account_holder_name;
      this.ifsc_code = this.payment[0].account_ifsc_code;
      this.account_phone_number = this.payment[0].account_phone_number;
    });
    this.service.getbalance().subscribe(result=>{
      this.balance=result;
    })
  }
  paytm() {
    this.service.getpaymentdetails(1).subscribe((result) => {
      this.payment = result;
      this.payment_method = this.payment[0].payment_method;
      this.account_holder_name = this.payment[0].account_holder_name;
      this.ifsc_code = this.payment[0].account_ifsc_code;
      this.account_phone_number = this.payment[0].account_phone_number;
    });
    this.paytmdetil = true;
    this.phonepedetails = false;
    this.googlepaydetail = false;
    this.impsdetail = false;
  }
  phonepe() {
    this.service.getpaymentdetails(2).subscribe((result) => {
      this.payment = result;
      this.payment_method = this.payment[0].payment_method;
      this.account_holder_name = this.payment[0].account_holder_name;
      this.ifsc_code = this.payment[0].account_ifsc_code;
      this.account_phone_number = this.payment[0].account_phone_number;
    });
    this.paytmdetil = false;
    this.phonepedetails = true;
    this.googlepaydetail = false;
    this.impsdetail = false;
  }
  googlepe() {
    this.service.getpaymentdetails(3).subscribe((result) => {
      this.payment = result;
      this.payment_method = this.payment[0].payment_method;
      this.account_holder_name = this.payment[0].account_holder_name;
      this.ifsc_code = this.payment[0].account_ifsc_code;
      this.account_phone_number = this.payment[0].account_phone_number;
    });
    this.paytmdetil = false;
    this.phonepedetails = false;
    this.googlepaydetail = true;
    this.impsdetail = false;
  }
  imps() {
    this.service.getpaymentdetails(4).subscribe((result) => {
      this.payment = result;
      this.payment_method = this.payment[0].payment_method;
      this.account_holder_name = this.payment[0].account_holder_name;
      this.ifsc_code = this.payment[0].account_ifsc_code;
      this.account_phone_number = this.payment[0].account_phone_number;
    });
    this.paytmdetil = false;
    this.phonepedetails = false;
    this.googlepaydetail = false;
    this.impsdetail = true;
  }
  ngOnInit(): void {
    this.postdata = this.formBuilder.group({
      deposit: ['', [Validators.required, Validators.min(100)]],
    });
    this.username = sessionStorage.getItem('token');
    this.depositform = this.formBuilder.group({
      username: [this.username, Validators.required],
      amount: [this.amount, Validators.required],
      image: ['', Validators.required],
    });
    this.name = sessionStorage.getItem('name');
    this.dialogRef.backdropClick().subscribe(() => {
      this.toastr.error('Close the deposit Information page','', {
        timeOut: 1000
      });
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onsubmitpre(data: any) {
    this.amount = JSON.parse(JSON.stringify(data)).deposit;
    this.step1st = false;
    this.step2nd = true;
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
  url = ''; 
  onchange(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      this.image = event.target.files[0];      
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.submi = true;
      };
    }
  }
  depositdata() {
    this.service
      .depositdetail(this.username, this.amount, this.image,this.payment_method,this.account_holder_name,this.ifsc_code,this.account_phone_number,this.type_deposit,this.name)
      .subscribe(
        (result) => {
          if (JSON.parse(JSON.stringify(result)).send == true) {
            Swal.fire({
              icon: 'success',
              title: 'Your Balance Amount is update in 15 min',
              background: '#322a71',
              color: '#fff',
              showConfirmButton: false,
              timer: 1500,
            });
            this.dialogRef.close();
          }
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: err.error,
            showConfirmButton: false,
            timer: 2000,
          });
          if (JSON.parse(JSON.stringify(err)).error) {
            Swal.fire({
              icon: 'error',
              title: 'Please upload JPG and PNG images only!',
              showConfirmButton: false,
              timer: 2000,
            });
          }
        }
      );
  }
}
