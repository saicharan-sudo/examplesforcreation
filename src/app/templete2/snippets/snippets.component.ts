import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormserviceService } from 'src/app/formservice.service';
import { PagerService } from 'src/app/pager.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import * as moment from 'moment';
declare let $: any;

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {

  canditate: any
  candidateDummy: any
  dtOptions: any = {};
  datepickerConfig: Partial<BsDatepickerConfig>

  constructor(private service: FormserviceService,
    public pagerService: PagerService,
    private toastr:ToastrService,
    private Route:Router
  ) {
    // $().DataTable();
    this.datepickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat: 'YYYY-MM-DD',
        
        showWeekNumbers: false
      }

    )
   }
   SElectTheDate:any=[];
   changedFilterDate(event:any){
     console.log(this.SElectTheDate);
     
 let firstSelectedDate=this.SElectTheDate[0]
 // console.log(firstSelectedDate);
 
 let firstSElectedDateConverted=moment(firstSelectedDate).format('yyyy-MM-DD')
 console.log(firstSElectedDateConverted);
 let secondSelectedDate=this.SElectTheDate[1]
 let secondSelectedDateconvert=moment(secondSelectedDate).format('yyy-MM-DD')
 console.log(secondSelectedDateconvert);
 let valuesforFilter=[...this.canditate]
 valuesforFilter=this.canditate.filter((data:any)=>{
  return new Date(data.dateOfBirth) >= new Date(firstSElectedDateConverted)
   &&
   new Date(data.dateOfBirth) <= new Date(secondSelectedDateconvert)
 })
 this.candidateDummy=valuesforFilter
   }
   
   list: any;
   dataList: any;
   selcetedDate: Date;
   toDate: Date;
  // dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.service.getData().subscribe((data: any) => {
      this.canditate = data
      setTimeout(()=>{                          
        $('#example').DataTable( {
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu : [5, 10, 25],
          order:[[1,"desc"]]
      } );
      }, 0);

     
    $(document).ready(function() {
        var table = $('#example').DataTable();
         
        // Event listener to the two range filtering inputs to redraw on input
        $('#minDate, #maxDate').keyup( function() {
            table.draw();
        } );
    } );
      
      this.candidateDummy = data
    })
    this.list = [
      { id: 1, name: 'sai', from: '1-2-2021', to: '1-3-2021' },
      { id: 2, name: 'charan', from: '2-2-2021', to: '2-3-2021' },
      { id: 3, name: 'ashok', from: '3-2-2021', to: '3-3-2021' },
      { id: 4, name: 'kishore', from: '4-2-2021', to: '4-3-2021' },
      { id: 5, name: 'lakshman', from: '5-2-2021', to: '5-3-2021' },
      { id: 6, name: 'krishna', from: '6-2-2021', to: '6-3-2021' },
      { id: 7, name: 'murthy', from: '7-2-2021', to: '7-3-2021' },
      { id: 8, name: 'nikhil', from: '8-2-2021', to: '8-3-2021' },
      { id: 9, name: 'raghu', from: '9-2-2021', to: '9-3-2021' },
      { id: 10, name: 'prem', from: '10-2-2021', to: '10-3-2021' },
    ]
    this.dataList = this.list
    this.selcetedDate = new Date("02-01-2021");
  }

  // selectFirstDate:any
  // methodToEvent(event:any){
  //   $.fn.dataTable.ext.search.push(
  //     function( settings:any, data:any, dataIndex:any ) {
  //         var mindate = ( $('#mindate').selectFirstDate[0], 10 );
  //         var maxdate = ( $('#maxdate').selectFirstDate[1], 10 );
//           let firstSElectedDateConverted=moment(mindate).format('yyyy-MM-DD')
//           let secondSElectedDateConverted=moment(maxdate).format('yyyy-MM-DD')

//           var Records = ( data[9] ) || 0;
   
//           if ( 
//             mindate >=  Records
//  &&
//  maxdate <=  Records
//  )
//           {
//               return true;
//           }
//           return false;
// console.log(mindate);

// console.log(maxdate);
//       }

//   );
//   }

  logout(){
    this.toastr.success('Logout success')
    this.Route.navigate(['/login'])    
  }

dummyArray:[]=[]
oneDate(event:any){
  console.log(this.canditate);
  // this.canditate=this.dummyArray
  let values=[...this.canditate]
  values=this.canditate.filter((x:any)=>{
    x.dateOfBirth === event.split('-')[0]
  })
  this.candidateDummy=values
}

  selecteddate(event:any){
    alert(this.selectedDate)
    let start=new Date('1-1-2000')
    // let startDate = event[0].split('-')[0];  
    // let endDate = event[1].split('-')[0];  
    // alert(startDate);
    // alert(endDate);
    
    // this.candidateDummy=this.canditate.filter((m:any)=>{
    //   new Date(m.dateOfBirth) >= new Date(startDate) 
    //   &&
    //   new Date(m.dateOfBirth) <= new Date(endDate)
    // })

    let end=new Date();
    console.log("~~before~~");
    console.log(start);
    console.log(end);
    let startConverted=moment(start).format('DD-MM-yyyy')
    let endConverted=moment(end).format('DD-MM-yyyy')
    console.log("~~after~~");
    console.log(startConverted);
    console.log(endConverted);    
    let valuesToConvert=this.candidateDummy.filter((m:any)=>{
      return (m.dateOfBirth) >= startConverted
      &&
   (m.dateOfBirth) <= endConverted
    })
    this.candidateDummy=valuesToConvert
  }
  reverseAndTimeStamp(dateString: any) {
    const reverse = new Date(dateString.split("-").reverse().join("-"));
    return reverse.getTime();
  }

  filter() {
    const convertSelectedDate = moment(this.selcetedDate).format("DD-MM-YYYY")
    const convertToDate = moment(this.toDate).format("DD-MM-YYYY")
    alert(convertToDate)
    if (this.selcetedDate && this.toDate) {
      const values = this.dataList.filter((data: any) => {
        return this.reverseAndTimeStamp(data.from) >=
          this.reverseAndTimeStamp(convertSelectedDate)
          &&
          this.reverseAndTimeStamp(data.from) <=
          this.reverseAndTimeStamp(convertToDate)
      })
      this.dataList = values
    }
    else {
      this.dataList = this.list;
    }
  }



  startYesterday=new Date().setFullYear(2021,5,3)
  endYesterday=new Date().setFullYear(2021,5,5)
  yesterday(){
    var d = new Date();

console.log( 'Today is: ' + d.toLocaleString());

var x=d.setDate(d.getDate() - 2);
var y=moment(x).format('YYYY-MM-DD')
// let firstSElectedDateConvertedforYesterday=moment(this.startYesterday).format('DD-MM-YYYY')

console.log(y.toLocaleString());
console.log(typeof(y));

let valuesforFilter=[...this.canditate]
valuesforFilter=this.canditate.filter((data:any)=>{
return new Date(data.dateOfBirth) <= d
&&
new Date(data.dateOfBirth) >= new Date(y)
})
this.candidateDummy=valuesforFilter

  }



  startLastWeek=new Date().setFullYear(2021,3,26)
  endLastWeek=new Date().setFullYear(2021,4,5)
  lastWeek(){
    console.log(this.startYesterday);
    let firstSElectedDateConvertedforWeek=moment(this.startLastWeek).format('YYYY-MM-DD')
    console.log(firstSElectedDateConvertedforWeek);
    let secondElementDataConvertedforMonth=moment(this.endLastWeek).format('YYYY-MM-DD')
console.log(secondElementDataConvertedforMonth);
alert(moment().month("december").format("M"))

 let valuesforFilterweek=[...this.canditate]

 valuesforFilterweek=this.canditate.filter((data:any)=>{
return new Date(data.dateOfBirth) >= new Date(firstSElectedDateConvertedforWeek)
       &&
       new Date(data.dateOfBirth) <= new Date(firstSElectedDateConvertedforWeek)
     })
        this.candidateDummy=valuesforFilterweek
  }

  startLastMonth=new Date().setFullYear(2021,3,1)
  endLastMonth=new Date().setFullYear(2021,4,1)
  
  LastMonth(){
    console.log(this.startYesterday);
    let firstSElectedDateConvertedforMonth=moment(this.startLastMonth).format('YYYY-MM-DD')
    console.log(firstSElectedDateConvertedforMonth);
    let secondElementDataConvertedforMonth=moment(this.endLastMonth).format('YYYY-MM-DD')
console.log(secondElementDataConvertedforMonth);
 let valuesforFilterMonth=[...this.canditate]
     valuesforFilterMonth=this.canditate.filter((data:any)=>{
return new Date(data.dateOfBirth) >= new Date(firstSElectedDateConvertedforMonth)
       &&
       new Date(data.dateOfBirth) <= new Date(secondElementDataConvertedforMonth)
     })
        this.candidateDummy=valuesforFilterMonth
  }

  startLastYear=new Date().setFullYear(2020,5,1)
  endLastYear=new Date().setFullYear(2021,5,1)
  LastYear(){
    console.log(this.startYesterday);
    let firstSElectedDateConvertedforYesterday=moment(this.startLastYear).format('YYYY-MM-DD')
    console.log(firstSElectedDateConvertedforYesterday);
    let secondElementDataConvertedforYesterday=moment(this.endLastYear).format('YYYY-MM-DD')
console.log(secondElementDataConvertedforYesterday);
 let valuesforFilterYear=[...this.canditate]
     valuesforFilterYear=this.canditate.filter((data:any)=>{
      return new Date(data.dateOfBirth) >= new Date(firstSElectedDateConvertedforYesterday)
       &&
       new Date(data.dateOfBirth) <= new Date(secondElementDataConvertedforYesterday)
     })
        this.candidateDummy=valuesforFilterYear
  }
  // getemployee() {
  //   this.service.getData().subscribe((data: any) => {
  //     this.canditate = data
  //     this.candidateDummy = data
  //   })
  // }

  delete(data: any) {
    if (window.confirm('are you sure want to delete')) {
      this.service.deleteData(data).subscribe(() => {
        this.ngOnInit()
      })
    }
  }
  selectedDate:any

selectedViewData:any;

  viewData(data:any){
this.selectedViewData=data.familyDetails;
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

  public data = [
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
    {name: 'therichpost', email: 'therichpost@gmail.com', website:'therichpost.com'},
  ] 



}
