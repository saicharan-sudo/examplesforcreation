import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { Templete2Module } from "../app/templete2/templete2.module";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {DataTablesModule} from 'angular-datatables';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Templete2Module,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({positionClass: 'toast-top-right'}),
    BrowserAnimationsModule,
    // DataTablesModule
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
