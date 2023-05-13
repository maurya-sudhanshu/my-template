import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
export interface dataa {
  name: string;
  display_name: string;
}
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent implements OnInit {
  task: Task = {
    name: 'Select All',
    completed: false,
    color: 'accent',
    subtasks: [
      {
        name: 'All',
        completed: false,
        color: 'accent',
        subtasks: [
          { name: 'Browse Admin', completed: false, color: 'accent' },
          { name: 'Browsr Bread', completed: false, color: 'accent' },
          { name: 'Browse Database', completed: false, color: 'accent' },
          { name: 'Browse Media', completed: false, color: 'accent' },
          { name: 'Browse Compass', completed: false, color: 'accent' },
          { name: 'Browse Hooks', completed: false, color: 'accent' },
        ],
      },
      {
        name: 'Menus',
        completed: false,
        color: 'accent',
        subtasks: [
          { name: 'Browse Menus', completed: false, color: 'accent' },
          { name: 'Read Menus', completed: false, color: 'accent' },
          { name: 'edit Menus', completed: false, color: 'accent' },
          { name: 'add Menus', completed: false, color: 'accent' },
          { name: 'Delete Menus', completed: false, color: 'accent' },
        ],
      },
      {
        name: 'Roles',
        completed: false,
        color: 'accent',
        subtasks: [
          { name: 'Browse Roles', completed: false, color: 'accent' },
          { name: 'Read Roles', completed: false, color: 'accent' },
          { name: 'edit Roles', completed: false, color: 'accent' },
          { name: 'add Roles', completed: false, color: 'accent' },
          { name: 'Delete Roles', completed: false, color: 'accent' },
        ],
      },
      {
        name: 'Users',
        completed: false,
        color: 'accent',
        subtasks: [
          { name: 'Browse Users', completed: false, color: 'accent' },
          { name: 'Read Users', completed: false, color: 'accent' },
          { name: 'edit Users', completed: false, color: 'accent' },
          { name: 'add Users', completed: false, color: 'accent' },
          { name: 'Delete Users', completed: false, color: 'accent' },
          { name: 'Status Users', completed: false, color: 'accent' },
          { name: 'Chips Users', completed: false, color: 'accent' },
          { name: 'Add Account Users', completed: false, color: 'accent' },
          { name: 'View Account Users', completed: false, color: 'accent' },
          { name: 'Change Password Users', completed: false, color: 'accent' },
          { name: 'Account Chips Users', completed: false, color: 'accent' },
          { name: 'settings Users', completed: false, color: 'accent' },
          { name: 'Defualt Users', completed: false, color: 'accent' },
          {
            name: 'Account Stetement Users',
            completed: false,
            color: 'accent',
          },
          {
            name: 'Match Profit Loss Users',
            completed: false,
            color: 'accent',
          },
          { name: 'My Bets Users', completed: false, color: 'accent' },
          { name: 'Setlerment View Users', completed: false, color: 'accent' },
          { name: 'Setlerment Users', completed: false, color: 'accent' },
          {
            name: 'Setlerment history Users',
            completed: false,
            color: 'accent',
          },
          {
            name: 'Bettier Bet Delete Users',
            completed: false,
            color: 'accent',
          },
          { name: 'Bettier Bet Void Users', completed: false, color: 'accent' },
          {
            name: 'Bettier Bet Rollback Users',
            completed: false,
            color: 'accent',
          },
          {
            name: 'Fancy Bet Rollback Users',
            completed: false,
            color: 'accent',
          },
          { name: 'Fancy Bet Delete Users', completed: false, color: 'accent' },
          { name: 'Fancy Bet Void Users', completed: false, color: 'accent' },
          {
            name: 'Live Line Settings Users',
            completed: false,
            color: 'accent',
          },
          { name: 'Balance Export Users', completed: false, color: 'accent' },
          {
            name: 'Deposit Withdrawal List Users',
            completed: false,
            color: 'accent',
          },
          { name: 'Support Users', completed: false, color: 'accent' },
          { name: 'Report Export Users', completed: false, color: 'accent' },
          { name: 'Admin List Users', completed: false, color: 'accent' },
          { name: 'Superment LIst Users', completed: false, color: 'accent' },
          { name: 'Master LIst Users', completed: false, color: 'accent' },
          { name: 'Agent List Users', completed: false, color: 'accent' },
          { name: 'Users List Users', completed: false, color: 'accent' },
          { name: 'Closed Button Users', completed: false, color: 'accent' },
          { name: 'Setlerment Delete', completed: false, color: 'accent' },
          {
            name: 'Client Profit Loss Users',
            completed: false,
            color: 'accent',
          },
          {
            name: 'User Setlerment History Users',
            completed: false,
            color: 'accent',
          },
          { name: 'Add All Type Users', completed: false, color: 'accent' },
          { name: 'Other', completed: false, color: 'accent' },
        ],
      },
      {
        name: 'Settings',
        completed: false,
        color: 'accent',
        subtasks: [
          { name: 'Browse Settings', completed: false, color: 'accent' },
          { name: 'Read Settings', completed: false, color: 'accent' },
          { name: 'Edit Settings', completed: false, color: 'accent' },
          { name: 'add Settings', completed: false, color: 'accent' },
          { name: 'Delete Settings', completed: false, color: 'accent' },
        ],
      },
      {
        name: 'Posts',
        completed: false,
        color: 'accent',
        subtasks: [
          { name: 'Browse Posts', completed: false, color: 'accent' },
          { name: 'Read Posts', completed: false, color: 'accent' },
          { name: 'edit Posts', completed: false, color: 'accent' },
          { name: 'add Posts', completed: false, color: 'accent' },
          { name: 'Delete Posts', completed: false, color: 'accent' },
        ],
      },
      {
        name: 'Pages',
        completed: false,
        color: 'accent',
        subtasks: [
          { name: 'Browse Pages', completed: false, color: 'accent' },
          { name: 'Read Pages', completed: false, color: 'accent' },
          { name: 'Edit Pages', completed: false, color: 'accent' },
          { name: 'Add Pages', completed: false, color: 'accent' },
          { name: 'Delete Pages', completed: false, color: 'accent' },
        ],
      },
      {
        name: 'White Label Sports',
        completed: false,
        color: 'accent',
        subtasks: [
          { name: 'Browse White Label', completed: false, color: 'accent' },
          { name: 'Read White Label', completed: false, color: 'accent' },
          { name: 'Edit White Label', completed: false, color: 'accent' },
          { name: 'Add White Label', completed: false, color: 'accent' },
          { name: 'Delete White Label', completed: false, color: 'accent' },
          { name: 'Status White Label', completed: false, color: 'accent' },
        ],
      },
      {
        name: 'SubAdmin',
        completed: false,
        color: 'accent',
        subtasks: [
          { name: 'Browse SubAdmin', completed: false, color: 'accent' },
          { name: 'Add SubAdmin', completed: false, color: 'accent' },
          { name: 'Edit SubAdmin', completed: false, color: 'accent' },
          { name: 'Status SubAdmin', completed: false, color: 'accent' },
          {
            name: 'Change Password SubAdmin',
            completed: false,
            color: 'accent',
          },
        ],
      },
      {
        name: 'DeleteData',
        completed: false,
        color: 'accent',
        subtasks: [
          { name: 'DeleteData DeleteData', completed: false, color: 'accent' },
          { name: 'My Markets', completed: false, color: 'accent' },
          { name: 'Inplay matches', completed: false, color: 'accent' },
        ],
      },
      {
        name: 'News',
        completed: false,
        color: 'accent',
        subtasks: [
          { name: 'Browse News', completed: false, color: 'accent' },
          { name: 'Read News', completed: false, color: 'accent' },
          { name: 'Edit News', completed: false, color: 'accent' },
          { name: 'Add News', completed: false, color: 'accent' },
          { name: 'Delete News', completed: false, color: 'accent' },
        ],
      },
      {
        name: 'Sliders',
        completed: false,
        color: 'accent',
        subtasks: [
          { name: 'Browse Sliders', completed: false, color: 'accent' },
          { name: 'Read Sliders', completed: false, color: 'accent' },
          { name: 'Edit Sliders', completed: false, color: 'accent' },
          { name: 'Add Sliders', completed: false, color: 'accent' },
          { name: 'Delete Sliders', completed: false, color: 'accent' },
        ],
      },
    ],
  };
  data: any = [];
  searchText: any;
  arr: any = [];
  view = false;
  viewdatavalue = false;
  viewhide = true;
  allComplete: boolean = false;
  rolesdata: any = [] 
  username:any = "";
  ngOnInit(): void {   }
  constructor(
    private service: AdminService,
    private router: Router,
    private _location: Location
  ) {
    this.service.getoledata().subscribe((result) => {
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
  }
  displayedColumns: string[] = ['SERIAL_NO', 'name', 'display_name', 'action'];
  dataSource = new MatTableDataSource(this.data);
  applyFilter(event: Event) {
    console.log(this.data);
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }
  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }
  updateAllComplete2() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
    this.arr = this.task.subtasks;
    const a = this.arr.forEach((abc: any) => {
      console.log(abc.completed);
    });
  }
  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }
  smallsomeComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }
  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    displayname: new FormControl('', Validators.required),
  });
  submit(data: any) {
    if (this.form.valid) {
      console.log(data);
      console.log(this.task);
      this.service.addnewroledata(this.task, data).subscribe(
        (result) => {
          alert(JSON.stringify(result));
          this.router
            .navigateByUrl('/refresh', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([decodeURI(this._location.path())]);
            });
        },
        (error) => {
          if (
            JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(error)).error))
              .text == 'ER_DUP_ENTRY'
          ) {
            alert('Dublicate Entry');
          }
        }
      );
    }
  }
  getdatabyid(data: any) {
    this.service.receiptdetailsbbyid(data).subscribe((result) => { });
  }
  change() {
    this.view = true;
    this.viewhide = false;
  }
  changeto() {
    this.viewdatavalue = false;
    this.viewhide = true;
    this.view = false;
  }
  viewnew(name: string) {
    this.viewhide = false;
    this.viewdatavalue = true;
    this.service.getdataonapi(name).subscribe(result => {
      this.rolesdata = result;
      console.log(result);
    })
  }
  viewdata(name: string, display_name: string) {
    alert("Name :- " + name + ", Display Name :- " + display_name)
  }
  deletedatabyid(data: any) {
    if (confirm("Are you sure to delete ")) {
      this.service.deleteroles(data).subscribe(result => {
        if (result) {
          this.router
            .navigateByUrl('/refresh', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([decodeURI(this._location.path())]);
            });
        }
      })
    }
  }
}
