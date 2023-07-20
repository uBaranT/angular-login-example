import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  editing = false;
  resumeText = 'Resume';

  toggleEditing(): void {
    this.editing = true;
  }

  saveResume(): void {
    console.log('Saved Resume:', this.resumeText);
    this.editing = false;
  }

  cancelEditing(): void {
    this.editing = false;
  }
}
