import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginRequests } from '../model/userLoginRequests';
import { JobPosts } from '../model/jobPosts';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //authStatus: boolean = false

  //user:  

  constructor(private http: HttpClient) { }

  // for Login...

  onLogin(obj: UserLoginRequests) : Observable<UserResponse>{
   return this.http.post<UserResponse>('http://localhost:8080/user/login', obj);
  }

}




export interface UserResponse { 
  email?: string;
  favorites?: Array<JobPosts>;
  id?: number;
  message?: string;
  name?: string;
  previousApplications?: Array<JobPosts>;
  resume?: string;
  surname?: string;
}


//if(Response.data.message) { }
