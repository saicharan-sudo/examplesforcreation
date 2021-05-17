import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormserviceService } from 'src/app/formservice.service';

@Component({
  selector: 'app-template2login',
  templateUrl: './template2login.component.html',
  styleUrls: ['./template2login.component.css']
})
export class Template2loginComponent implements OnInit {

  constructor(
    private route: Router, private activatedroute: ActivatedRoute,
    private service: FormserviceService,
  ) { }
  id = this.activatedroute.snapshot.params['id']
  ngOnInit(): void {

    this.methodForNumbers();
    if (this.id) {
      this.service.getDataId(this.id).subscribe((data: any) => {
        this.signUp.patchValue(data)
      })
    }
  }

  signUp = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required)
  })

  get f() {
    return this.signUp.controls
  }

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

  submit(data: any) {
    this.service.postData(data).subscribe((data: {}) => {
      this.route.navigate(['/sidehome/view'])
    })
  }

  update(data: any) {
    this.service.updateData(this.id, data).subscribe((data: {}) => {
      this.route.navigate(['/sidehome/view'])
    })
  }
}