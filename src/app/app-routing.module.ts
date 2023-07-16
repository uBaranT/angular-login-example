import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainPageComponent } from './main-page/main-page.component';

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
      path:'mainPage',
      component:MainPageComponent
      },
      {
        path:'**',
        redirectTo:'login',
        pathMatch:'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
