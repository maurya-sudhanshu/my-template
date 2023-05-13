import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  userForm = this.fb.group({
    name:['', [Validators.required,Validators.minLength(5)]],
   }); 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  onFormSubmit(data:any){
   alert(JSON.stringify(data))
   
} 
get name(): any {
  return this.userForm.controls['name'];
} 
}
