import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router: Router,
    private service1: LoginserviceService,private toastr: ToastrService
   ) { }

  login: FormGroup;
  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }
  get f() {
    return this.login.controls
  }
  submitted = false;

  check = { uname: 'admin@thrymr.net', password: '@Bcd12' }

  onsubmit(data:any) {
    if (this.login.invalid) {
      this.submitted = true;
      // this.toastr.warning('please Enter the credentials')
      return;
    }
    if (this.check.uname == this.login.value.email &&
      this.check.password == this.login.value.password) {
        this.router.navigate(["/sidehome/signup"]);
        this.toastr.success("Login Successfully");
        this.service1.sendToken( JSON.stringify(data))
    }
    else{
      this.toastr.warning('Invalid Credentials')
    }


  }

}
