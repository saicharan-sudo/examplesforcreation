import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidehome',
  templateUrl: './sidehome.component.html',
  styleUrls: ['./sidehome.component.css']
})
export class SidehomeComponent implements OnInit {

  constructor(private Route:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  logout(){
    this.toastr.success('Logout success')
      this.Route.navigate(['/login'])
    
  }
  

}
