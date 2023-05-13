import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  hide = true;
  adminlogin!: FormGroup;
  constructor(private formBuilder: FormBuilder,private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminlogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: [ '', Validators.required],    
    });
  }
  login(data:any){
this.service.login(data).subscribe(result=>{
  sessionStorage.setItem('adminauth',JSON.parse(JSON.stringify(result)).token);
  sessionStorage.setItem('adminuser',JSON.parse(JSON.stringify(result)).username);
  sessionStorage.setItem('referral',JSON.parse(JSON.stringify(result)).referral);
   if(JSON.parse(JSON.stringify(result)).status == true){
    Swal.fire({
      icon:'success',
      title:'Login SuccessFUlly',
      timer:1000,
      showConfirmButton:false
    })
      this.router.navigate(['admin/deshboard']);
      setTimeout(() => {
        window.location.reload();
      }, 800);
  }
},err=>{
  Swal.fire({
    icon:'error',
    title:err.error,
    background:'black',
    color:'white'
  })
})
  }
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

}
