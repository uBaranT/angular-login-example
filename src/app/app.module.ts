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
import {MatListModule} from '@angular/material/list';

import { HomepageComponent } from './homepage/homepage.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ProfileComponent } from './profile/profile.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessfulPopUpComponent } from './successful-pop-up/successful-pop-up.component';
import { UnsuccessfulPopUpComponent } from './unsuccessful-pop-up/unsuccessful-pop-up.component';
import { UserControllerService } from './api/userController.service';
import { ResumeComponent } from './resume/resume.component';
import { SavedItemsComponent } from './saved-items/saved-items.component';
import { ApplicationsComponent } from './applications/applications.component';

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
        ResumeComponent,
        SavedItemsComponent,
        ApplicationsComponent,
    ],

    providers: [
        UserControllerService
    ],
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
        MatCheckboxModule,
        HttpClientModule,
        MatListModule
    ],
})
export class AppModule { }
