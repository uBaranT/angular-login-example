import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent {

  constructor( 
    private authService: AuthService,
    private router: Router
  ) {}

  
  logout(): void {

    this.authService.logout ();
    this.router.navigate(['/login']);
    
    console.log('logout');
  }
}

