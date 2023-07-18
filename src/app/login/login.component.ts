import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{MatDialog} from '@angular/material/dialog';
import { SuccessfulPopUpComponent } from '../successful-pop-up/successful-pop-up.component';
import { UnsuccessfulPopUpComponent } from '../unsuccessful-pop-up/unsuccessful-pop-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  hide: boolean = false;
  
  constructor(private fb: FormBuilder, private router: Router, private dialogRef:MatDialog) {

  }

  ngOnInit() {
  }
  
  loginForm: FormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
    })


    onLogin() {
      if (this.loginForm.valid) {
        this.dialogRef.open(SuccessfulPopUpComponent);//To get the successful pop up
        this.router.navigate(['/homepage']);
      } else {
        this.dialogRef.open(UnsuccessfulPopUpComponent);
      }
    }

}