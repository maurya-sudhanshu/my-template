import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidatorService } from 'src/app/vaidator/custom-validator.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss'],
})
export class AgentsComponent implements OnInit {
  @ViewChild('closebutton') closebutton: any;
  @ViewChild('closebutton2') closebutton2: any;
  data: any = [];
  hide = true;
  refresh = window.localStorage.getItem('refresh');
  admingenrate!: FormGroup;
  adminbalace!: FormGroup;
  id: number | undefined;
  searchText:any;
  constructor(
    private formBuilder: FormBuilder,
    private custom_validator: CustomValidatorService,
    private service: AdminService,
    private router: Router,
    private _location: Location
  ) {
    this.service.adminagents().subscribe((result) => {
      this.data = result;
    });
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      this.router
        .navigateByUrl('/refresh', { skipLocationChange: true })
        .then(() => {
          this.router.navigate([decodeURI(this._location.path())]);
        });
    } else {
      localStorage.removeItem('foo');
    }
    this.admingenrate = this.formBuilder.group({
      name: ['', Validators.required],
      username: [
        '',
        Validators.required,
        this.custom_validator.validateUsernameNotTaken.bind(
          this.custom_validator
        ),
      ],
      mobile: [
        '',
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      referral: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.adminbalace = this.formBuilder.group({
      balance: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    $('#info').click(function () {
      $('#infodata').toggle('slow');
    });
  }
  statuschange(status: any, username: any) {
    this.service.agentsstatusupdate(status, username).subscribe(
      (result) => {
        if (result == true) {
          window.location.reload();
        }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: JSON.stringify(err),
        });
      }
    );
  }
  admingenraten(data: any) {
    this.service.adminregister(data).subscribe(
      (result) => {
        if (result == true) {
          Swal.fire({
            icon: 'success',
            title: 'SuccessFully register new agent',
            background: 'black',
            color: 'green',
            confirmButtonColor: 'LightSeaGreen',
            timer: 500,
          });
          this.admingenrate.reset();
          this.closebutton.nativeElement.click();
          this.router
            .navigateByUrl('/refresh', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([decodeURI(this._location.path())]);
            });
        }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error,
        });
      }
    );
  }
  deleteaccount(id: any, username: any) {
    if (confirm("Are you sure to delete '" + username + "' Account")) {
      this.service.adminaccountdelete({ id: id }).subscribe(
        (result) => {
          if (result == true) {
            Swal.fire({
              icon: 'success',
              title: 'Deleted Account',
              timer: 2500,
              background: 'black',
              color: 'green',
              confirmButtonColor: 'LightSeaGreen',
            });
            this.router
              .navigateByUrl('/refresh', { skipLocationChange: true })
              .then(() => {
                this.router.navigate([decodeURI(this._location.path())]);
              });
          }
        },
        (err) => {
          Swal.fire({
            icon: 'error',
            title: err.error,
            background: 'black',
            color: 'green',
            confirmButtonColor: 'LightSeaGreen',
          });
        }
      );
    }
  }
  gete(data: any) {
    this.id = data;
  }
  addbalance(data: any) {
    this.service.adminaddbalance({balance:JSON.parse(JSON.stringify(data)).balance},this.id).subscribe(
      (result) => {
        if (result == true) {
          Swal.fire({
            icon: 'success',
            title: 'SuccessFully Add Amount',
            background: 'black',
            color: 'green',
            confirmButtonColor: 'LightSeaGreen',
            timer: 500,
          });
          this.adminbalace.reset();
          this.closebutton2.nativeElement.click();
          this.router
            .navigateByUrl('/refresh', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([decodeURI(this._location.path())]);
            });
        }
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: err.error,
          background: 'black',
          color: 'green',
          confirmButtonColor: 'LightSeaGreen',
        });
      }
    );
  }
}
