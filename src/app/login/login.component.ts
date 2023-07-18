import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  hide: boolean = false;
  
  constructor(private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
  }
  
  loginForm: FormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
    })

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Logged in successfully');
      this.router.navigate(['/homepage']);
    } else {
      console.log('Email and password are required');
    }
  }
  
}
