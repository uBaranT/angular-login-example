import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {
    path:'',
    component: AppComponent,
    children: [
      {
        path: 'login', 
        component: LoginComponent
      },

      {
        path: 'signup',
        component: SignupComponent
      },

      {
        path: 'homepage',
        component: HomepageComponent
      },

      {
        path:'profile',
        component:ProfileComponent
      },

      {
        path:'**',
        redirectTo:'login',
        pathMatch:'full'
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
