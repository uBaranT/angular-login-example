import { SearchService } from './../services/search.service';
// import { JobListings } from '.models/job-listing';
import { Component, OnInit} from '@angular/core';
import { JobListingService } from '../services/job-listing.service';
import { JobPosts } from '../model/jobPosts';
import { JobPostsContollerService } from '../api/jobPostsContoller.service';
import { HttpErrorResponse } from '@angular/common/http';
import { delay, distinct } from 'rxjs';

/*
interface JobListing {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
}
*/


@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})

export class JobListingComponent implements OnInit {
  jobListings: JobPosts [] = [];

  constructor(
    private jobListingService: JobListingService, 
    private searchService: SearchService,
    private jobPostsContollerService: JobPostsContollerService
  ){}

  ngOnInit (){
    this.getJobListings();
    this.search()
  }

  getJobListings(){
    this.jobListingService.getJobListings().subscribe(
      (data: JobPosts[]) => {
        this.jobListings = data;
      },
      (error) => {
        console.log("Error fetching job listings: ", error);
      }
    );
  }

  search() {
    this.searchService.getSearchData()
      .pipe(
        delay(500),
        distinct()
      )
      .subscribe((searchData) => {
        if (searchData.length) {
          this.jobPostsContollerService.searchJobPostsUsingGET(searchData)
            .subscribe({
              next: (res) => {
                this.jobListings = res;
              },
              error: (err: HttpErrorResponse) => {
                console.warn(err.error)
              }
            })
        }
      })
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
