import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl= "http://localhost:8080/user/register";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  
    setData(formBody?: any){
         /*this.http.post().subscribe(res => {
            console.log(res);
         })*/
    }
}
