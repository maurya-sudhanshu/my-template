import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  hostURL = environment.hostURl;
  header = new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem('adminauth'))
  username = sessionStorage.getItem('adminuser');
  referral = sessionStorage.getItem('referral');
  constructor(private http: HttpClient) {}
  login(data: any) {
    return this.http.post(this.hostURL + '/adminlogin', data);
  }
  adminbalabce() {
    return this.http.post(
      this.hostURL + '/adminbalance',
      { username: this.username },
      { headers: this.header }
    );
  }
  adminagentbalabce() {
    return this.http.post(
      this.hostURL + '/adminagentbalance',
      { username: this.username },
      { headers: this.header }
    );
  }
  adminagents() {
    return this.http.post(
      this.hostURL + '/adminagents',
      { username: this.username },
      { headers: this.header }
    );
  }
  getuserdata() {
    return this.http.post(
      this.hostURL + '/admingetuserdata',
      { username: this.username },
      { headers: this.header }
    );
  }
  statusupdate(status: any, username: any) {
    return this.http.post(
      this.hostURL + '/statusupdate/' + this.username,
      { status: status, username: username },
      { headers: this.header }
    );
  }
  agentsstatusupdate(status: any, username: any) {
    return this.http.post(
      this.hostURL + '/agentstatusupadte/' + this.username,
      { status: status, username: username },
      { headers: this.header }
    );
  }
  adminregister(data: any) {
    return this.http.post(this.hostURL + '/adminregister', data, {
      headers: this.header,
    });
  }
  adminaccountdelete(data: any) {
    return this.http.post(this.hostURL + '/adminagentdeleteacount', data, {
      headers: this.header,
    });
  }
  adminaddbalance(balance: any, id: any) {
    return this.http.post(this.hostURL + '/addbalance/' + id, balance, {
      headers: this.header,
    });
  }
  adminuseraddbalance(balance: any, id: any) {
    return this.http.post(
      this.hostURL + '/useraddbalance/' + this.username,
      { balance: balance, id: id },
      {
        headers: this.header,
      }
    );
  }
  addduser(data: any) {
    return this.http.post(this.hostURL + '/addduser/' + this.username, data, {
      headers: this.header,
    });
  }
  paymentdetails() {
    return this.http.post(
      this.hostURL + '/paymentdetails',
      { username: this.username },
      { headers: this.header }
    );
  }
  paymentdetailsedit(data: any) {
    return this.http.post(
      this.hostURL + '/paymentdetailsedit/' + data,
      { username: this.username },
      { headers: this.header }
    );
  }
  updatepaymentdetails(data: any) {
    return this.http.post(
      this.hostURL + '/updatepaymentdetails/' + this.username,
      data,
      { headers: this.header }
    );
  }
  receiptdetailsdeposit() {
    return this.http.post(
      this.hostURL + '/receiptdetailsdeposit',
      { username: this.username,referral:sessionStorage.getItem('referral') },
      { headers: this.header }
    );
  }
  receiptdetailswithdarwal() {
    return this.http.post(
      this.hostURL + '/receiptdetailswithdarwal',
      { username: this.username,referral:sessionStorage.getItem('referral') },
      { headers: this.header }
    );
  }
  receiptdetailsbbyid(data:any){
    return this.http.post(
      this.hostURL + '/receiptdetailsbbyid',
      { username: this.username,id:data },
      { headers: this.header }
    );
  }
  receiptapprovedw(data:any) {
    return this.http.post(
      this.hostURL + '/receiptapprovedw/' + this.username,
      data,
      { headers: this.header }
    );
  }
  receiptapproved(data:any) {
    return this.http.post(
      this.hostURL + '/receiptapproved/' + this.username,
      data,
      { headers: this.header }
    );
  }
  receiptdeclined(data:any) {
    return this.http.post(
      this.hostURL + '/receiptdeclined/' + this.username,
      data,
      { headers: this.header }
    );
  }
  adminchangepassword(data:any){
    return this.http.post(this.hostURL+'/adminchangepassword/'+this.username,data,{headers:this.header});
  }
  getbankdetails(){
    return this.http.post(this.hostURL+"/getbankdetails",{username:this.username},{headers:this.header})
  }
  getbankdetailsmany(){
    return this.http.post(this.hostURL+"/getbankdetailsmany",{username:this.username},{headers:this.header})
  }
  getbankdetailsbyid(id:any){
return this.http.post(this.hostURL+"/getbankdetailsbyid",{username:this.username,id:id},{headers:this.header});
  }
  getotherpaymentdetailsbyid(id:any){
return this.http.post(this.hostURL+"/getotherpaymentdetailsbyid",{username:this.username,id:id},{headers:this.header});
  }
  bankdetailsapproved(id:any){
return this.http.post(this.hostURL+"/bankdetailsapproved",{id:id,username:this.username},{headers:this.header})
  }
  getoledata(){
    return this.http.post(this.hostURL+"/rolesdataget",{username:this.username},{headers:this.header})
  }
  deleteroles(id:number){
    return this.http.post(this.hostURL+"/deleteroles/"+id,{username :this.username},{headers: this.header})
  }
  addnewroledata(data:any,moredata:any){
    return this.http.post(this.hostURL+"/addnewroledata",{data:data,moredata:moredata},{headers:this.header});
  }
  getdataonapi(name:string){
    return this.http.post(this.hostURL+"/getdataonapi",{"username":this.username,displayname:name},{headers:this.header});
  }
}
