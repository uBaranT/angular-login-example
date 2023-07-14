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
  
  constructor(private fb: FormBuilder, private rooter: Router) {

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
    email: ['', [Validators.required]],
    password:['', [Validators.required, Validators.minLength(6)]],
    name: ['', Validators.required],
    surname: ['', [Validators.required, Validators.minLength(2)]],
    phonenumber: ['', [Validators.required, Validators.minLength(2)]]
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
