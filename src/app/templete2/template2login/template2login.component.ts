import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormserviceService } from 'src/app/formservice.service';
import { ToastrService } from 'ngx-toastr';
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import * as moment from 'moment';
@Component({
  selector: 'app-template2login',
  templateUrl: './template2login.component.html',
  styleUrls: ['./template2login.component.css']
  
})
export class Template2loginComponent implements OnInit {
  datepickerConfig: Partial<BsDatepickerConfig>
  myDatepicker:any
  constructor(
    private route: Router, private activatedroute: ActivatedRoute,
    private service: FormserviceService, private toastr: ToastrService,
    private Route: Router,

    private fb: FormBuilder
  ) {
    this.datepickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        // dateInputFormat: 'DD/MM/YYYY'
      }

    )
   }
  id = this.activatedroute.snapshot.params['id']
  ngOnInit(): void {

    this.methodForNumbers();
    if (this.id) {
      this.service.getDataId(this.id).subscribe((data: any) => {
        this.signUp.patchValue(data)
      })
    }
  }
  date:any=moment().format('d-MM-yyyy')
  datetodisplay(){
    let convertDate=this.date
    console.log(this.date);
    
  }
  signUp = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    dateOfBirth:new FormControl('',Validators.required),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    familyDetails: new FormGroup({
      fatherName: new FormControl('', Validators.required),
      fatherOccupation: new FormControl('', Validators.required),
      fatherMobileNumber: new FormControl('', Validators.required),
      motherName: new FormControl('', [Validators.required]),
      motherOccupation: new FormControl('', Validators.required),
      mothermobileNumber: new FormControl('', Validators.required),
      homeAddress: new FormControl('', Validators.required)
    })



  })
  p: number = 1;

  get f() {
    return this.signUp.controls
  }
  logout() {
    this.toastr.success('Logout success')
    this.Route.navigate(['/login'])

  }

  // get g() {
  //   return this.signUp.familyDetails.controls;
  // }

  cityNames = ['Kurnool', 'Nandyal']
  countryNames = ['India', 'USA', 'SouthAfrica']
  ratingnumbers: any;
  methodForNumbers() {
    for (let i = 0; i < 6; i++) {
      let numbers = i;
      this.ratingnumbers = numbers
    }
  }

  ratingNumbers: any[] = ['1', '2', '3', '4', '5']
  statusNames = ['active', 'inactive']
  submitted = false;
  submit(data: any) {
    console.log(data);
    if (this.signUp.invalid) {
      this.submitted = true
    }
    else {
      this.service.postData(data).subscribe((data: {}) => {
        this.route.navigate(['/sidehome/view'])
      })
    }
  }

  update(data: any) {
    if (window.confirm('are you sure want to update')) {
      this.service.updateData(this.id, data).subscribe((data: {}) => {
        this.route.navigate(['/sidehome/view'])
      })
    }

  }
  updated(data: any) {
    if (window.confirm('are you sure want to update')) {
      this.service.updateData(this.id, data).subscribe((data: {}) => {
        this.route.navigate(['/sidehome/snippet'])
      })
    }

  }
}