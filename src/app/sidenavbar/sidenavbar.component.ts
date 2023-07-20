import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss'],
})



export class SidenavbarComponent implements OnInit {

  searchTerm: string = '';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  @ViewChild('searchTerm')
  searchInput!: ElementRef;
  
  constructor (private observer: BreakpointObserver, private searchService: SearchService) {}


  ngOnInit(): void {
  }


  search(e: string): void {
    this.searchService.searchData.next(e)
  }

  ngAfterViewInit() {
    
    setTimeout(()=>{

      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      
        if(res.matches){
          this.sidenav.mode = 'over';
          this.sidenav.close();
        }
        
        else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
    }, 0)
  }
 
}