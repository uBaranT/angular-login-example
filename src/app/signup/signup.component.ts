import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessfulPopUpComponent } from '../successful-pop-up/successful-pop-up.component';
import { MatDialog } from '@angular/material/dialog';

import { UnsuccessfulPopUpComponent } from '../unsuccessful-pop-up/unsuccessful-pop-up.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit  {

  hide: boolean = false;
  
  constructor(private fb: FormBuilder, private router: Router,private dialogRef:MatDialog) {

  }

  ngOnInit() {
    this.signupForm.valueChanges
    .subscribe({
      next: (values) => {
        console.log(values)

      }
    })
  }

  
  signupForm: FormGroup = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
    name: ['', Validators.required],
    surname: ['', [Validators.required, Validators.minLength(2)]]
  })


  onSignup() {
    if (this.signupForm.valid){
      this.dialogRef.open(SuccessfulPopUpComponent); //To create successful message
     
      this.router.navigate(['/login']);
    }
    else {
      this.dialogRef.open(UnsuccessfulPopUpComponent);
     
    }

  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }
  pushRawData(){
    const rawData = this.signupForm.getRawValue()
    console.log(rawData)
  }
}

 