import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchData: BehaviorSubject<string> = new BehaviorSubject<string>('');

  getSearchData() {
    return this.searchData.asObservable()
  }

  constructor() { }
}
