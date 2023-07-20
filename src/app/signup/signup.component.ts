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
  
  constructor(private fb: FormBuilder,
    private router: Router,
    private dialogRef:MatDialog,
    private SignupService: SignupService) {

  }

  /*
  myFunc(){
    alert("function called");

  }
*/
  ngOnInit() {
    /*
    this.signupForm.valueChanges
    .subscribe({
      next: (values) => {
        console.log(values)
      }
    })

    */
  }

  
  signupForm: FormGroup = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
    name: ['', Validators.required],
    surname: ['', [Validators.required, Validators.minLength(2)]],
  })


  onSignup(dt: any) {
    
      this.SignupService.onSignup(dt).subscribe((response)=> {
      localStorage.setItem('email',response.email)
      localStorage.setItem('name',response.name)
      localStorage.setItem('surname',response.surname)
      localStorage.setItem('password',response.password)

      console.log(response)
      });

      this.router.navigateByUrl('login')
      this.dialogRef.open (SuccessfulPopUpComponent);
      if(this.signupForm.valid){

      }else {
        this.router.navigateByUrl('signup')
        this.dialogRef.open(UnsuccessfulPopUpComponent);
      }
    }


    /*
    if (this.signupForm.valid){

      this.dialogRef.open(SuccessfulPopUpComponent); 
      this.router.navigate(['/login']);

    }
    else {
      console.log("Please fill the form correctly");
      this.dialogRef.open(UnsuccessfulPopUpComponent);
    }

    console.log(this.signupForm.value);

    */

  saveTutorial(): void {
    const data = {
      
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

 /* 
 asdf() {
  const rawData = this.signupForm.getRawValue()
  console.log(rawData)
  }

  */
