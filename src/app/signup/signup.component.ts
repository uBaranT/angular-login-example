import { SignupService } from './../services/signup.service';
import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessfulPopUpComponent } from '../successful-pop-up/successful-pop-up.component';
import { UnsuccessfulPopUpComponent } from '../unsuccessful-pop-up/unsuccessful-pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import {} from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit  {

  hide: boolean = false;
  
  constructor(private fb: FormBuilder, private rooter: Router) {

  }

  /*
  myFunc(){
    alert("function called");

  }
*/
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
    surname: ['', [Validators.required, Validators.minLength(2)]],
  })


  onSignup() {
    if (this.signupForm?.invalid){
      return;
    }

    console.log(this.signupForm.value);
  }

  gotoLogin() {
    this.rooter.navigate(['/login'])
  }

  asdf() {
    const rawData = this.signupForm.getRawValue()
    console.log(rawData)
  }
}

 /* 
 asdf() {
  const rawData = this.signupForm.getRawValue()
  console.log(rawData)
  }

  */
