import { Component, OnInit } from '@angular/core';
import { SearchDataService } from '../../services/search-data.service';
import { SearchFilter } from '../../model/product';

@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.scss']
})
export class ProductTabComponent implements OnInit {
  searchDataArr: Array<SearchFilter> = [{  // --> type of search obj model ? create new interface
    searchInputValue: '',
    priceRange: '',
    category: ''
  }];

  isSelected = -1;

  constructor(private _searchDataService: SearchDataService) { }

  ngOnInit() {
  }

  // goToTab(index: number): void {
  //   console.log(this.searchDataArr[index]);
  //   this.setSearchData(index);
  // }

  // addNewTab(addAtIndex: number): void {
  //   const searchData: SearchFilter = this._searchDataService.getSearchData();  //
  //   if (searchData) {
  //     this.searchDataArr.splice(addAtIndex, 0, searchData);
  //   }

  //   console.log('tab added!', this.searchDataArr, this.searchDataArr[addAtIndex]);

  //   this.setSearchData(addAtIndex, true);
  // }

  // removeCurrentTab(currentTabIndex: number): void {
  //   this.searchDataArr.splice(currentTabIndex, 1);
  //   console.log('tab removed!', this.searchDataArr);

  //   this.setSearchData(currentTabIndex);
  // }

  // setSearchData(index: number, isAdded?: boolean): void {
  //   if (isAdded) {
  //     this._searchDataService.setCurrentSearchModel({
  //       searchInputValue: '',
  //       priceRange: '',
  //       category: ''
  //     });
  //   } else {
  //     this._searchDataService.setCurrentSearchModel(this.searchDataArr[index]);
  //   }
  // }

  addNewTab(addAtIndex: number): void {
    const searchData = this._searchDataService.getSearchData();
    // this.searchDataArr.push(searchData);
    this.searchDataArr.splice(addAtIndex, 0, searchData);
    console.log('push', this.searchDataArr);
    this._searchDataService.setSearchData({
      searchInputValue: '',
      priceRange: '',
      category: ''
    });
    // this._searchDataService.setSearchData(this.searchDataArr[this.searchDataArr.length - 1]);
  }

  goToTab(index: number): void {
    console.log('Tab addd !', this.searchDataArr[index]);
    this._searchDataService.setSearchData(this.searchDataArr[index]);
    this.isSelected = index;
  }

  removeCurrentTab(currentIndex: number): void {
    this.searchDataArr.splice(currentIndex, 1);
    this._searchDataService.setSearchData(this.searchDataArr[currentIndex]);
  }
}
