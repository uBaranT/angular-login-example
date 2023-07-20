import { Injectable } from '@angular/core';
import { JobPosts } from '../model/jobPosts';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {

  constructor() { }

  getJobListings (): JobPosts [] {
    return [
      {
        datePosted: new Date(),
        description: 'We are hiring!',
        field: 'Software Development',
        location: 'Istanbul',
        position: 'Software Developer',
        postId: 1,
        title: 'Software Developer',
        workHours: 'Full-Time',
        workType: 'Remote'
      },
    ]
  }
}
