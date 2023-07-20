// import { JobListings } from '.models/job-listing';
import { Component} from '@angular/core';
import { JobListingService } from '../services/job-listing.service';
import { JobPosts } from '../model/jobPosts';

interface JobListing {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}


@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})

export class JobListingComponent {
  jobListings: JobPosts [] = [];

  constructor(private jobListingService: JobListingService){}

  ngOnInit (){
    this.jobListings = this.jobListingService.getJobListings();
  }
    /*
    {
      id:1,
      title:'Software Developer',
      company: 'UBT Company',
      location: 'Istanbul',
      description: 'We are hiring !'
    },

    {
      id:2,
      title:'Project Manager',
      company: 'Yalapşap Company',
      location: 'Ankara',
      description: 'We are looking for "YALAPŞAP" Project Manager'
    },
    
    {
      id:3,
      title:'Product Owner',
      company: 'Softy Company',
      location: 'Izmir',
      description: 'We are looking for a product owner with sensitive skin !'
    },
    
    {
      id:4,
      title:'Product Specialist',
      company: 'X Company',
      location: 'Istanbul',
      description: 'We are looking for specialist'
    },

    {
      id:5,
      title:'Sales Manager',
      company: 'Y Company',
      location: 'Izmir',
      description: 'We are looking for sales manager'
    },

    {
      id:6,
      title:'BI Developer',
      company: 'XY Company',
      location: 'Ankara',
      description: 'We are looking for BI Developer'
    },

    {
      id:7,
      title:'Data architecture',
      company: 'TEST Company',
      location: 'Aydin',
      description: 'We are data architecture'
    },
    
  ]
  */
}
