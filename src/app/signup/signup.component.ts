import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit  {

  hide: boolean = false;


  
  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    
  }

  
  signupForm: FormGroup = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
    name: ['', Validators.required],
    surname: ['', [Validators.required, Validators.minLength(2)]],
    phonenumber: ['', [Validators.required, Validators.minLength(2)]]
  })


  onSignup() {
    if (this.signupForm.valid){
      this.router.navigate(['/login']);
    }
    else {
      console.log('Please fill the form correctly');
    }

   
  }

  gotoLogin() {
    
    this.router.navigate(['/login'])
  }

  pushRawData() {
    const rawData = this.signupForm.getRawValue()
    console.log(rawData)
  }
  

}
