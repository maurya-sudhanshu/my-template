import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-otherpayment',
  templateUrl: './otherpayment.component.html',
  styleUrls: ['./otherpayment.component.scss']
})
export class OtherpaymentComponent implements OnInit {
  @ViewChild('close') close: any;
  data: any = [];
  userdata: any = [];
  hostURl = environment.hostURl;
  adminuser:any="";
  id:number|undefined;
  declineform!: FormGroup;
  searchText:any;
  constructor(
    private service: AdminService,
    private router: Router,
    private _location: Location,
    private formBuilder: FormBuilder,
  ) {
    this.adminuser = sessionStorage.getItem('adminuser');
    this.service.getbankdetailsmany().subscribe((result) => {
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
    this.service.getotherpaymentdetailsbyid(data).subscribe((result) => {
      this.userdata = result;
    });
  }

}
