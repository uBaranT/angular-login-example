import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';

import { HomepageComponent } from './homepage/homepage.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ProfileComponent } from './profile/profile.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { SuccessfulPopUpComponent } from './successful-pop-up/successful-pop-up.component';
import { UnsuccessfulPopUpComponent } from './unsuccessful-pop-up/unsuccessful-pop-up.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        HomepageComponent,
        TopnavbarComponent,
        ProfileComponent,
        SidenavbarComponent,
        JobListingComponent,
        SuccessfulPopUpComponent,
        UnsuccessfulPopUpComponent,
    ],

    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatIconModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        FormsModule,
        BrowserModule,
        MatSidenavModule,
        MatDividerModule,
        MatCheckboxModule
    ],
})
export class AppModule { }
