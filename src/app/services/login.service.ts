import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginRequests } from '../model/userLoginRequests';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //authStatus: boolean = false

  //user:  

  constructor(private http: HttpClient) { }

  
  // for Login...

  onLogin(obj: UserLoginRequests) : Observable<UserLogin>{
   return this.http.post<UserLogin>('http://localhost:8080/user/login', obj);
  }

}




export interface UserLogin { 
  email: string;
  password: string;
}

//if(Response.data.message) { }
