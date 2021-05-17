import { Component, OnInit } from '@angular/core';
import { FormserviceService } from 'src/app/formservice.service';
import { PagerService } from 'src/app/pager.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.css']
})
export class ChangesComponent implements OnInit {

  constructor(private service: FormserviceService,
    public pagerService: PagerService,
    private toastr:ToastrService,
    private Route:Router) { }

  ngOnInit(): void {

    this.getemployee()
        // this.dataTable=$(this.table.nativeElement);
    // this.dataTable.dataTable();
    // this.dtOptions={
    //   pagingType:'full_numbers',
    //   pageLength:5,
    //   lengthMenu:[5,15,25],
    //   processing:true
    // }

  }

  canditate: any
  candidateDummy: any
  searchKey: any;
  values:any
  local(){
    localStorage.setItem('entering',this.values)
  }
  removelocal(){
    localStorage.removeItem('entering')
  }
  valuestohtml:any
  displayLocal(){
   let valuefordisplay =localStorage.getItem("login Details")
   this.valuestohtml=valuefordisplay    
  }
  clearstorage(){
    localStorage.clear()
  }
  
  logout(){
    this.toastr.success('Logout success')
    this.Route.navigate(['/login'])    
  }
  dob:any=[
    {'name':'sai','dateOfBirth':'1-5-2000','gender':'male'},
    {'name':'charan','dateOfBirth':'2-6-1999','gender':'female'},
    {'name':'dcba','dateOfBirth':'10-1-2005','gender':'male'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},
    {'name':'abcd','dateOfBirth':'1-10-2004','gender':'female'},

  ]
  p: any=1 ;
  p2:any=1
  p3:any=1
  currentPage:any=1
  itemsPerPage:any=5;
  totalItems:number
  // pageSize=5

  dropdown10(event:any){
    this.itemsPerPage =event.target.value;
    this.currentPage=1;
  }
  dropdown5(event:any){
    this.itemsPerPage =event.target.value;
    this.currentPage=1;
  }
  dropdown15(event:any){
    this.itemsPerPage =event.target.value;
    this.currentPage=1;

  }
  getemployee() {
    this.service.getData().subscribe((data: any) => {
      this.canditate = data
      this.candidateDummy = data
      // this.filterOriginalData();
    })
  }


  delete(data: any) {
    if (window.confirm('are you sure want to delete')) {
      this.service.deleteData(data).subscribe(() => {
        this.ngOnInit()
      })
    }
  }

key='id';
reverse=false;
sort(key:any){
this.key=key
this.reverse=!this.reverse
}


  // search():any {
  //   let tempdata = [...this.canditate]
  //   this.candidateDummy = tempdata.filter((data: any) => {
  //     return data.firstName.toLowerCase().includes(this.searchKey.toLowerCase())
  //       ||
  //       data.lastName.toLowerCase().includes(this.searchKey.toLowerCase())
  //       ||
  //       data.email.toLowerCase().includes(this.searchKey.toLowerCase())
  //       ||
  //       data.address.toLowerCase().includes(this.searchKey.toLowerCase())
  //       ||
  //       data.city.toLowerCase().includes(this.searchKey.toLowerCase())
  //       ||
  //       data.country.toLowerCase().includes(this.searchKey.toLowerCase())
  //       ||
  //       data.rating.toString().includes(this.searchKey.toString())
  //       ||
  //       data.status.toLowerCase().includes(this.searchKey.toLowerCase())
  //   })
  // }

 


selectedViewData:any;

  viewData(data:any){
this.selectedViewData=data.familyDetails;
  }

}
