import { Component } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent {
  applicationsList: string[] = ['Başvuru 1', 'Başvuru 2', 'Başvuru 3'];

  saveApplications(): void {
    console.log('Saved Applications:', this.applicationsList);
  }
  

  openApplicationDetail(application: string): void {
    console.log('Selected Application:', application);
  }
}
