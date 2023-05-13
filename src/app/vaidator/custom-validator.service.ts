import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { map} from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor(private http:HttpClient) { }
  validateUsernameNotTaken(control: AbstractControl) {
    return this.checkUsernameNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { usernameTaken: true };
      })
    );
  }

  //Fake API call -- You can have this in another service
  checkUsernameNotTaken(username: string):Observable<boolean> {
    return this.http.get("assets/fakedb.json").pipe(
      map<any,any>((usernameList: Array<any>) =>
        usernameList.filter(user => user.username === username)
      ),
      map(users => !users.length)
    );
  }
}
