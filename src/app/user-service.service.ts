import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {users} from '../assets/users';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl = 'assets/users.ts' ;

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.usersUrl);
  }
}
