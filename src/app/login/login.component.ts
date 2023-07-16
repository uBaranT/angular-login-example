import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  hide: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Logged in successfully');
      this.router.navigate(['/mainPage']);
    } else {
      console.log('Email and password are required');
    }
  }
}
