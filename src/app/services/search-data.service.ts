import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SearchFilter } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  searchModel: SearchFilter;  // search data object local to srvc --> type (new search model obj type) ?
  private currentSearchModel = new Subject<SearchFilter>();  // current filter values which needs to be set in search filter

  constructor() {
    console.log('SearchDataService const: ', this.searchModel);
  }

  // // return search data object stored in srvc
  // getSearchData(): SearchFilter {  // --> returns srchModelObj, so give appropriate data type
  //   console.log('getSearchData from service', this.searchModel);
  //   return this.searchModel;
  // }

  // // set srvc search data object to provided filter vals
  // setSearchData(searchModel: SearchFilter): void { // --> same
  //   this.searchModel = Object.assign({}, searchModel);
  //   this.currentSearchModel.next(searchModel);

  //   console.log('setSearchData to service', this.searchModel);
  // }

  // setCurrentSearchModel(searchModel: SearchFilter): void { // --> same
  //   this.currentSearchModel.next(searchModel);
  // }

  // getCurrentSearchModel(): Observable<SearchFilter> {  // --> same
  //   return this.currentSearchModel.asObservable();
  // }

  getSearchData() {
    return this.searchModel;
  }

  setSearchData(searchModel): void {
    this.searchModel = searchModel;
    console.log('searchModel', this.searchModel);
  }
}
