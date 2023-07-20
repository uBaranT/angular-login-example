import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {
  private apiUrl = "http://localhost:8080/jobposts";

  constructor(private http: HttpClient) { }

  getJobListings (): Observable< JobPosts []> {
    return this.http.get<JobPosts[]>(this.apiUrl);
  }

}

export interface JobPosts { 
  datePosted?: Date;
  companyName?: string;
  description?: string;
  field?: string;
  location?: string;
  position?: string;
  postId?: number;
  title?: string;
  workHours?: string;
  workType?: string;
}

