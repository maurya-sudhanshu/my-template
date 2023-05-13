import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  hostURL = environment.hostURl;
  username = sessionStorage.getItem('token');
  header = new HttpHeaders({
    Authorization: 'Bearer ' + sessionStorage.getItem('auth'),
  });
  constructor(private http: HttpClient) {}
  sendotp(data: any) {
    return this.http.post(this.hostURL + '/sendotp', data);
  }
  forgetdotp(data: any) {
    return this.http.post(this.hostURL + '/forgetdotp', data);
  }
  checkotp(otp: any, mobile: any) {
    return this.http.post(this.hostURL + '/checkotp/' + otp, mobile);
  }
  register(data: any, token: any) {
    return this.http.post(this.hostURL + '/register', data, {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
    });
  }
  login(data: any) {
    return this.http.post(this.hostURL + '/login', data);
  }
  newpassword(data: any, data1: any, token: any) {
    return this.http.post(this.hostURL + '/forget/' + data, data1, {
      headers: new HttpHeaders({ Authorization: 'Bearer ' + token }),
    });
  }
  depositdetail(
    username: string,
    amount: string,
    image: File,
    paymentmethod: any,
    accountholdername: any,
    ifsc: any,
    accountphonenumber: any,
    deposit: any,
    name: any
  ) {
    const imagee = new FormData();
    imagee.append('image', image, image.name);
    imagee.append('username', username);
    imagee.append('amount', amount);
    imagee.append('paymentmethod', paymentmethod);
    imagee.append('accountholdername', accountholdername);
    imagee.append('ifsc', ifsc);
    imagee.append('accountphonenumber', accountphonenumber);
    imagee.append('deposit', deposit);
    imagee.append('name', name);
    return this.http.post(this.hostURL + '/deposit', imagee, {
      headers: this.header,
    });
  }
  getpaymentdetails(data: any) {
    return this.http.post(
      this.hostURL + '/getpaymentdetail',
      { username: this.username, id: data },
      { headers: this.header }
    );
  }
  getbalance() {
    return this.http.post(
      this.hostURL + '/getbalance',
      { username: this.username },
      { headers: this.header }
    );
  }
  userdata(data: any) {
    return this.http.post(
      this.hostURL + '/userpaymentdeatils/' + this.username,
      data,
      {
        headers: this.header,
      }
    );
  }
  getpaymentdetailIMPS() {
    return this.http.post(
      this.hostURL + '/getpaymentdetailsIMPS',
      { username: this.username },
      { headers: this.header }
    );
  }
  getpaymentdetailpaytm() {
    return this.http.post(
      this.hostURL + '/getpaymentdetailspaytm',
      { username: this.username },
      { headers: this.header }
    );
  }
  getpaymentdetailphonepe() {
    return this.http.post(
      this.hostURL + '/getpaymentdetailsphonepe',
      { username: this.username },
      { headers: this.header }
    );
  }
  getpaymentdetailgooglepay() {
    return this.http.post(
      this.hostURL + '/getpaymentdetailsgooglepay',
      { username: this.username },
      { headers: this.header }
    );
  }
  getpaymentdetailupi() {
    return this.http.post(
      this.hostURL + '/getpaymentdetailsupi',
      { username: this.username },
      { headers: this.header }
    );
  }
  getpaymentdeatailnumber() {
    return this.http.post(
      this.hostURL + '/getpaymentdeatilsnumber',
      { username: this.username },
      { headers: this.header }
    );
  }
  getpaymentdetailbyid(id: number) {
    return this.http.post(
      this.hostURL + '/getpaymentdetailsbyid',
      { username: this.username, id: id },
      { headers: this.header }
    );
  }
  delpaymentdetailbyid(id: number) {
    return this.http.post(
      this.hostURL + '/delpaymentdetailsbyid',
      { username: this.username, id: id },
      { headers: this.header }
    );
  }
  delpaymentdetailbyid2(id: number) {
    return this.http.post(
      this.hostURL + '/delpaymentdetailsbyid2',
      { username: this.username, id: id },
      { headers: this.header }
    );
  }
  withdrawal(data: any) {
    return this.http.post(this.hostURL + '/withdrawal/' + this.username, data, {
      headers: this.header,
    });
  }
  withdrawalhistory(){
    return this.http.post(this.hostURL+"/withdrawalhistory",{username:this.username},{headers:this.header});
  }
}
