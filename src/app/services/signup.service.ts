import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegisterRequests } from '../model/userRegisterRequests';

const baseUrl= "http://localhost:8080/user/register";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  onSignup(obj: UserRegisterRequests): Observable<UserRegister> {
    return this.http.post<UserRegister>('http://localhost:8080/user/register', obj);
  }

  /*
    setData(formBody?: any){
         this.http.post(baseurl, formBody).subscribe(res => {
            console.log(res);
         })
    }
  */
}

export interface UserRegister { 
  email: string;
  name: string;
  password: string;
  surname: string;
}