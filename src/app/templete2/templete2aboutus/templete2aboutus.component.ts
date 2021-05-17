import { Component, OnInit } from '@angular/core';
import { FormserviceService } from 'src/app/formservice.service';
import { PagerService } from 'src/app/pager.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templete2aboutus',
  templateUrl: './templete2aboutus.component.html',
  styleUrls: ['./templete2aboutus.component.css']
})
export class Templete2aboutusComponent implements OnInit {

  canditate: any
  candidateDummy: any
  searchKey: any;
  constructor(private service: FormserviceService,
    public pagerService: PagerService,
    private toastr:ToastrService,
    private Route:Router
  ) { }

  ngOnInit(): void {
    this.getemployee()
    // this.setPage(this.pager)
  }
  logout(){
    this.toastr.success('Logout success')
      this.Route.navigate(['/login'])
    
  }

  getemployee() {
    this.service.getData().subscribe((data: any) => {
      this.canditate = data
      this.candidateDummy = data
      this.filterOriginalData();
    })
  }


  delete(data: any) {
    if (window.confirm('are you sure want to delete')) {
      this.service.deleteData(data).subscribe(() => {
        this.ngOnInit()
      })
    }
  }

  p: number = 1;

  sortType: string;
  sortTypes: string;
  sortReverse: boolean = false;
  dynamicSort(property: any) {
    let sortOrder = -1;

    if (this.sortReverse) {
      sortOrder = 1;
    }

    return function (a: any, b: any) {
      let result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
  sort(property: any) {
    this.sortType = property;
    this.sortReverse = !this.sortReverse;
    this.candidateDummy.sort(this.dynamicSort(property));
  }



  pager: any = {};

  setPage(page: number) {
    // get pager object from service

    this.pager = this.pagerService.getPager(this.canditate.length,
      page);


    // get current page of items
    this.candidateDummy = this.canditate.slice(this.pager.startIndex,
      this.pager.endIndex + 1);

  }


  PAGENUMBER: number = 0;
  // currentpage:1;
  PAGESIZE: number = 5;
  TOTALPAGES: number = 1;

  filterData() {
    let start = this.PAGENUMBER * this.PAGESIZE;
    let end = (start + this.PAGESIZE) - 1;
    this.candidateDummy = this.canditate.slice(start, end)
    this.TOTALPAGES = this.canditate / this.PAGESIZE;
  }
  OnPageChange(event: any) {
    this.PAGENUMBER = event.target.value
    alert(this.OnPageChange)
    this.filterData()
  }
  onDropdownPageChange(event: any) {
    this.PAGESIZE = event.target.value;
    this.filterData()
  }
  pageIsFive(page: number) {
    this.pager = this.pagerService.page5(this.canditate.length,
      page);

    // get current page of items
    this.candidateDummy = this.canditate.slice(this.pager.startIndex,
      this.pager.endIndex + 1);
  }

  pageIsTen(page: number) {
    this.pager = this.pagerService.page10(this.canditate.length,
      page);

    // get current page of items
    this.candidateDummy = this.canditate.slice(this.pager.startIndex,
      this.pager.endIndex + 1);
  }

  view10(event: any, page: number) {
    this.pager = this.pagerService.page10(this.canditate.length,
      page);

    // get current page of items
    this.candidateDummy = this.canditate.slice(this.pager.startIndex,
      this.pager.endIndex + 1);
    let pageSiZe = (event.target.value)
    let totalITems: number;
    let currenTPage = 1;
    let totalPages = Math.ceil(totalITems / pageSiZe);
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currenTPage <= 6) {
        startPage = 1;
        endPage = 10;
      }
      // from 12
      else if (currenTPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      }
      // from 7
      else {
        startPage = currenTPage - 5;
        endPage = currenTPage + 4;
      }
    }


    // calculate start and end item indexes
    let startIndex = (currenTPage - 1) * pageSiZe;
    let endIndex = Math.min(startIndex + pageSiZe - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1)
      - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems: totalITems,
      currentPage: currenTPage,
      pageSize: pageSiZe,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };

  }

  view15(event: any, page: number) {
    this.pager = this.pagerService.page15(this.canditate.length,
      page);

    // get current page of items
    this.candidateDummy = this.canditate.slice(this.pager.startIndex,
      this.pager.endIndex + 1);
    let pageSiZe = event.target.value
    let totalITems: number;
    let currenTPage = 1;
    let totalPages = Math.ceil(totalITems / pageSiZe);
    let ValuE = totalPages;
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currenTPage <= 6) {
        startPage = 1;
        endPage = 10;
      }
      // from 12
      else if (currenTPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      }
      // from 7
      else {
        startPage = currenTPage - 5;
        endPage = currenTPage + 4;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currenTPage - 1) * pageSiZe;
    let endIndex = Math.min(startIndex + pageSiZe - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1)
      - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      totalItems: totalITems,
      currentPage: currenTPage,
      pageSize: pageSiZe,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };

  }
  search():any {
    let tempdata = [...this.canditate]
    this.candidateDummy = tempdata.filter((data: any) => {
      return data.firstName.toLowerCase().includes(this.searchKey.toLowerCase())
        ||
        data.lastName.toLowerCase().includes(this.searchKey.toLowerCase())
        ||
        data.email.toLowerCase().includes(this.searchKey.toLowerCase())
        ||
        data.address.toLowerCase().includes(this.searchKey.toLowerCase())
        ||
        data.city.toLowerCase().includes(this.searchKey.toLowerCase())
        ||
        data.country.toLowerCase().includes(this.searchKey.toLowerCase())
        ||
        data.rating.toString().includes(this.searchKey.toString())
        ||
        data.status.toLowerCase().includes(this.searchKey.toLowerCase())
    })
  }

  totalPages: number = 1;
  currentPage: number = 0;
  pageSize: number = 5;
  totalPagesData:number[]=[];
  dropDownPageSelect(event: any) {
    this.pageSize = event.target.value;
    this.filterOriginalData();
    if(this.searchKey){
    //   let start = this.currentPage * this.pageSize;
    // let end = start + this.pageSize;
    //   this.search().slice(start,end)
    this.search()
      this.filterOriginalData()
     }
      }
  filterOriginalData() {
    let start = this.currentPage * this.pageSize;
    let end = start + this.pageSize;
    this.totalPages = Math.ceil(this.canditate.length / this.pageSize)
    this.candidateDummy = this.canditate.slice(start, end);   
    this.totalPagesData=[];
    for (let index = 0; index < this.totalPages; index++) {
      this.totalPagesData.push(index);
    }
    console.log(this.totalPages);
    if(this.searchKey){
    //   let start = this.currentPage * this.pageSize;
    // let end = start + this.pageSize;
    // this.candidateDummy=this.canditate.slice(start,end)
    //  this.search().slice(start,end) 
    this.search()
     this.filterOriginalData()
     }
  }
  pageSelect(page: number) {
    this.currentPage =page;
    this.filterOriginalData();
    if(this.searchKey){
    //   let start = this.currentPage * this.pageSize;
    // let end = start + this.pageSize;
    //  this.search().slice(start,end) 
    this.search()
     this.filterOriginalData()
    }
    
  }



selectedViewData:any;

  viewData(data:any){
this.selectedViewData=data.familyDetails;
  }
  
}
