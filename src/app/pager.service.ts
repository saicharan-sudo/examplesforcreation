import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagerService {

  constructor() { }

 value:any;
 pagesize:any
 totalItems:number
 totalPages:any
 currentPage: number = 1
// forfiverecords(){
//     if(this.pagesize=5){
//         this.totalPages = Math.ceil(this.totalItems / this.pagesize);
//         this.value=this.totalPages;
//         let startPage: number, endPage: number;
//         if (this.totalPages <= 10) {
//             // less than 10 total pages so show all
//             startPage = 1;
//             endPage = this.totalPages;
//         }
//         else if(){
//             startPage = this.currentPage - 5;
//             endPage = this.currentPage + 4;
//         }
//     }
    
// }



page5(totalItems: number, currentPage: number = 1, 
    pageSize: number = 5){
     // calculate total pages
     let totalPages = Math.ceil(totalItems / pageSize);
    this.value=totalPages;
     let startPage: number, endPage: number;
     if (totalPages <= 10) {
         // less than 10 total pages so show all
         startPage = 1;
         endPage = totalPages;
     }  else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } 
        // from 12
        else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        }
        // from 7
         else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

     // calculate start and end item indexes
     let startIndex = (currentPage - 1) * pageSize;
     let endIndex = Math.min(startIndex + pageSize - 1);

     // create an array of pages to ng-repeat in the pager control
     let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

     // return object with all pager properties required by the view
     return {
         totalItems: totalItems,
         currentPage: currentPage,
         pageSize: pageSize,
         totalPages: totalPages,
         startPage: startPage,
         endPage: endPage,
         startIndex: startIndex,
         endIndex: endIndex,
         pages: pages
     };
 }
 
 page10(totalItems: number, currentPage: number = 1, 
    pageSize: number = 10){
     // calculate total pages
     let totalPages = Math.ceil(totalItems / pageSize);
    this.value=totalPages;
     let startPage: number, endPage: number;
     if (totalPages <= 10) {
         // less than 10 total pages so show all
         startPage = 1;
         endPage = totalPages;
     }  else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } 
        // from 12
        else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        }
        // from 7
         else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

     // calculate start and end item indexes
     let startIndex = (currentPage - 1) * pageSize;
     let endIndex = Math.min(startIndex + pageSize - 1);

     // create an array of pages to ng-repeat in the pager control
     let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

     // return object with all pager properties required by the view
     return {
         totalItems: totalItems,
         currentPage: currentPage,
         pageSize: pageSize,
         totalPages: totalPages,
         startPage: startPage,
         endPage: endPage,
         startIndex: startIndex,
         endIndex: endIndex,
         pages: pages
     };
 }

 page15(totalItems: number, currentPage: number = 1, 
    pageSize: number = 15){
     // calculate total pages
     let totalPages = Math.ceil(totalItems / pageSize);
    this.value=totalPages;
     let startPage: number, endPage: number;
     if (totalPages <= 10) {
         // less than 10 total pages so show all
         startPage = 1;
         endPage = totalPages;
     }  else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } 
        // from 12
        else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        }
        // from 7
         else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

     // calculate start and end item indexes
     let startIndex = (currentPage - 1) * pageSize;
     let endIndex = Math.min(startIndex + pageSize - 1);

     // create an array of pages to ng-repeat in the pager control
     let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

     // return object with all pager properties required by the view
     return {
         totalItems: totalItems,
         currentPage: currentPage,
         pageSize: pageSize,
         totalPages: totalPages,
         startPage: startPage,
         endPage: endPage,
         startIndex: startIndex,
         endIndex: endIndex,
         pages: pages
     };
 }
 
 page20(totalItems: number, currentPage: number = 1, 
    pageSize: number = 20){
     // calculate total pages
     let totalPages = Math.ceil(totalItems / pageSize);
    this.value=totalPages;
     let startPage: number, endPage: number;
     if (totalPages <= 10) {
         // less than 10 total pages so show all
         startPage = 1;
         endPage = totalPages;
     } 

     // calculate start and end item indexes
     let startIndex = (currentPage - 1) * pageSize;
     let endIndex = Math.min(startIndex + pageSize - 1);

     // create an array of pages to ng-repeat in the pager control
     let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

     // return object with all pager properties required by the view
     return {
         totalItems: totalItems,
         currentPage: currentPage,
         pageSize: pageSize,
         totalPages: totalPages,
         startPage: startPage,
         endPage: endPage,
         startIndex: startIndex,
         endIndex: endIndex,
         pages: pages
     };
 }
 
 

 getPager(totalItems: number, currentPage: number = 1, 
     pageSize: number = 5) {
     // calculate total pages
     let totalPages = Math.ceil(totalItems / pageSize);
    this.value=totalPages;
     let startPage: number, endPage: number;
     if (totalPages <= 10) {
         // less than 10 total pages so show all
         startPage = 1;
         endPage = totalPages;
     } else {
         // more than 10 total pages so calculate start and end pages
         if (currentPage <= 6) {
             startPage = 1;
             endPage = 10;
         } 
         // from 12
         else if (currentPage + 4 >= totalPages) {
             startPage = totalPages - 9;
             endPage = totalPages;
         }
         // from 7
          else {
             startPage = currentPage - 5;
             endPage = currentPage + 4;
         }
     }

     // calculate start and end item indexes
     let startIndex = (currentPage - 1) * pageSize;
     let endIndex = Math.min(startIndex + pageSize - 1);

     // create an array of pages to ng-repeat in the pager control
     let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

     // return object with all pager properties required by the view
     return {
         totalItems: totalItems,
         currentPage: currentPage,
         pageSize: pageSize,
         totalPages: totalPages,
         startPage: startPage,
         endPage: endPage,
         startIndex: startIndex,
         endIndex: endIndex,
         pages: pages
     };
 }
}
