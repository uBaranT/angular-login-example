import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  sidebarItems: any [] = [
    {
      title: 'Resume',
      section: 'resume'
    },

    {
      title: 'Applications',
      section: 'applications'
    },

    {
      title: 'Saved Items',
      section: 'savedItems'
    }

  ];

  selectedSection = 'resume';


  constructor (
    
    private authService: AuthService,
    private router: Router
    ) { }

    // creating for Logout...
 
  logout(): void {

    this.authService.logout ();
    this.router.navigate(['/login']);

    console.log('logout');
  }

  openSection(item: any): void {
    this.selectedSection = item.section;
    console.log('Selected Section:', this.selectedSection);
  }
}
