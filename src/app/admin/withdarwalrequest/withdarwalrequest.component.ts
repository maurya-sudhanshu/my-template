import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-withdarwalrequest',
  templateUrl: './withdarwalrequest.component.html',
  styleUrls: ['./withdarwalrequest.component.scss']
})
export class WithdarwalrequestComponent implements OnInit {
  @ViewChild('close') close: any;
  data: any = [];
  userdata: any = [];
  hostURl = environment.hostURl;
  adminuser:any="";
  id:number|undefined;
  amount:any="";
  usernamee:any="";
  declineform!: FormGroup;
  searchText:any;
  constructor(
    private service: AdminService,
    private router: Router,
    private _location: Location,
    private formBuilder: FormBuilder,
  ) {
    this.adminuser = sessionStorage.getItem('adminuser');
    this.service.receiptdetailswithdarwal().subscribe((result) => {
      this.data = result;    
      this.data = this.data.reverse(); 
    });
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      this.router
        .navigateByUrl('/refresh', { skipLocationChange: true })
        .then(() => {
          this.router.navigate([decodeURI(this._location.path())]);
        });
    }
    this.declineform = this.formBuilder.group({
      reason: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  getdatabyid(data: any) {
    this.service.receiptdetailsbbyid(data).subscribe((result) => {
      this.userdata = result;
    });
  }
  approved(id: any, status: any,amount:any,username:any) {
    this.service.receiptapprovedw({id:id,status:status,amount:amount,username:username}).subscribe((result) => {
      if (result) {
        this.router
          .navigateByUrl('/refresh', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([decodeURI(this._location.path())]);
          });
      }
    },err=>{
      Swal.fire({
        icon:'error',
        title:err.error
      })
    });
  }
  decline(id:any,amount:any,username:any){
    this.id = id;
    this.amount = amount;
    this.usernamee=username;
  }
  declined(data:any){
    this.service.receiptdeclined({id:this.id,reason:JSON.parse(JSON.stringify(data)).reason,amount:this.amount,username:this.usernamee}).subscribe((result) => {
      if (result) {
        this.close.nativeElement.click();
        this.router
          .navigateByUrl('/refresh', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([decodeURI(this._location.path())]);
          });
      }
    },err=>{
      Swal.fire({
        icon:'error',
        title:err.error
      })
    });
  }}
