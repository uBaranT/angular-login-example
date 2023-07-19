import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{MatDialog} from '@angular/material/dialog';
import { SuccessfulPopUpComponent } from '../successful-pop-up/successful-pop-up.component';
import { UnsuccessfulPopUpComponent } from '../unsuccessful-pop-up/unsuccessful-pop-up.component';
import { UserControllerService } from '../api/userController.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserResponse } from '../model/userResponse';
import { User } from '../model/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  name = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;


  hide: boolean = false;
  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private dialogRef:MatDialog,
    private loginService: LoginService

  ) {
    console.log('constructor')
  }

  

  ngOnInit() {
    
  }
  
  loginForm: FormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
    })


    onLogin(data: any) {
      this.loginService.onLogin(data).subscribe((response)=> {
        //if {}...
        localStorage.setItem('email', response.email )
        
        localStorage.setItem('password', response.password)
        console.log(response)
      });
       
     
      if (this.loginForm.valid) {       // this.dialogRef.open(SuccessfulPopUpComponent);//To get the successful pop up
        this.router.navigateByUrl('homepage')
      } else {
        this.dialogRef.open(UnsuccessfulPopUpComponent);
      }
    }

}
