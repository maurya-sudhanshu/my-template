import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Location } from '@angular/common';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss'],
})
export class WithdrawalComponent implements OnInit {
  // @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.listData) {
      this.listData.paginator = value;
    }
  }
  backtransfer = true;
  Upidetails = false;
  transferbynumber = false;
  bank = true;
  upi = false;
  number = false;
  imps: any = [];
  upidata: any = [];
  numberdata: any = [];
  id: any = '';
  valuedata: any = '';
  payment_method: any = '';
  status: any = '';
  formdata!: FormGroup;
  range!: FormGroup;
  data = false;
  acount = false;
  balance: any = '';
  balace = false;
  withdrawalpayment = true;
  withdrawalstatement = false;
  withdrawalhistory = false;
  withdrawalhistorydata: any = [];
  pipe = new DatePipe('en-US');
  now = Date.now();
    constructor(
    private service: UserServiceService,
    private router: Router,
    private _location: Location,
    private dialogref: MatDialog,
    public dialogRef: MatDialogRef<WithdrawalComponent>,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  listData!: MatTableDataSource<any>;
  displayedColumns: any[] = [
    'SERIAL_NO',
    'name',
    'payment_method',
    'payment_status',
    'amount',
    'date',
    'reason',
  ];
  applyFilter(event: string) {
    this.listData.filter = event.trim().toLowerCase();
  }
  filter(event: any) {
    console.log(event.target.value);
  }
  filter2(event: any) {
    console.log(event.target.value);
  }
  applyFilterall() {
    this.listData = new MatTableDataSource(this.withdrawalhistorydata);
  }
  get amount(): any {
    return this.formdata.controls['amount'];
  }
  get startdate(): any {
    return this.range.controls['start'];
  }
  get enddate(): any {
    return this.range.controls['end'];
  }
  get paymentoption(): any {
    return this.formdata.controls['accounttype'];
  }
  history() {
    this.withdrawalpayment = false;
    this.withdrawalhistory = true;
  }
  home() {
    this.withdrawalpayment = true;
    this.withdrawalhistory = false;
  }
  ngOnInit(): void {
    this.service.getpaymentdetailIMPS().subscribe((result) => {
      this.imps = result;
    });
    this.service.getpaymentdetailupi().subscribe((result) => {
      this.upidata = result;
    });
    this.service.getpaymentdeatailnumber().subscribe((result) => {
      this.numberdata = result;
    });
    this.service.getbalance().subscribe((result) => {
      this.balance = result;
    });
    this.dialogRef.backdropClick().subscribe(() => {
      this.toastr.error('Close the withdrawal Information page', '', {
        timeOut: 1000,
      });
    });
    this.range = this.fb.group({
      start: [''],
      end: [''],
    });
    this.formdata = this.fb.group({
      id: [this.id],
      amount: [
        '',
        [Validators.required, Validators.min(300), Validators.max(10000000)],
      ],
      accounttype: [this.payment_method, [Validators.required]],
      status: [this.status],
    });
    this.service.withdrawalhistory().subscribe((result) => {
      this.withdrawalhistorydata = result;
      this.withdrawalhistorydata.reverse();
      for (let i = 0; i < this.withdrawalhistorydata.length; i++) {
        this.withdrawalhistorydata[i]['SERIAL_NO'] = i + 1;
      }
      this.listData = new MatTableDataSource(this.withdrawalhistorydata);
    });
  }
  rangedata() {
    let arr = [];
    let i:number;
    arr = this.range.value;
    const mySimpleFormat = this.pipe.transform(arr.start, 'MMMM dd, yyyy');
    const myShortFormat = this.pipe.transform(arr.end, 'MMMM dd, yyyy');
    alert("FStart :- "+mySimpleFormat+", FEnd :- "+myShortFormat);   
    const maxim = new Date(Math.max(...this.withdrawalhistorydata.length.date))
    const minim = new Date(Math.min(...this.withdrawalhistorydata.date))
    console.log("max :- "+maxim);
    console.log("max :- "+minim);
  //   for(i = 0; i < this.withdrawalhistorydata.length; i++) {
  //      console.log("Index ::"+i+" Element::"+this.withdrawalhistorydata[i].date);
       
  //  }   
  }
   
  bacnk() {
    this.backtransfer = true;
    this.Upidetails = false;
    this.transferbynumber = false;
    this.bank = true;
    this.upi = false;
    this.number = false;
    this.acount = false;
  }
  UPIid() {
    this.backtransfer = false;
    this.Upidetails = true;
    this.transferbynumber = false;
    this.bank = false;
    this.upi = true;
    this.acount = false;
    this.number = false;
  }
  transfer() {
    this.backtransfer = false;
    this.Upidetails = false;
    this.transferbynumber = true;
    this.bank = false;
    this.upi = false;
    this.number = true;
    this.acount = false;
  }
  close() {
    this.dialogRef.close();
  }
  value(data: number) {
    this.valuedata = data;
  }
  bankdataa(id: number, payment_method: string, status: number) {
    this.id = id;
    this.payment_method = payment_method;
    this.status = status;
    this.acount = false;
    this.data = false;
  }
  bankdataa1(id: number, payment_method: string, status: number) {
    this.status = status;
    this.id = id;
    this.payment_method = payment_method;
    this.data = false;
    this.acount = false;
  }
  clicking() {
    this.balace = false;
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
  requestform(data: any) {
    if (this.formdata.valid) {
      if (this.formdata.controls['status'].value == 0) {
        this.acount = true;
      } else if (this.formdata.controls['amount'].value <= this.balance) {
        this.service.withdrawal(data).subscribe(
          (result) => {
            alert(JSON.stringify(result));
          },
          (err) => {
            alert(JSON.stringify(err));
          }
        );
      } else {
        this.balace = true;
      }
    } else if (this.formdata.controls['accounttype'].errors) {
      this.data = true;
    } else {
    }
  }
}
