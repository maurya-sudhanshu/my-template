import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.scss'],
})
export class AdminmainComponent implements OnInit {
  username:any = "Admin"; 
  veryfyusername :any = "";
  constructor(private route:ActivatedRoute) {
    this.veryfyusername = sessionStorage.getItem('adminuser');
  }

  ngOnInit(): void {
   $('.hideshow').click(function() {
      $('#manu').toggle('slow');
  });
  }
  
}
