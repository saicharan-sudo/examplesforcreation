import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Templete2RoutingModule } from './templete2-routing.module';
import { SidehomeComponent } from "../templete2/sidehome/sidehome.component";
import { Templete2aboutusComponent } from "../templete2/templete2aboutus/templete2aboutus.component";
import { Template2loginComponent } from './template2login/template2login.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { SnippetsComponent } from './snippets/snippets.component';
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FilterPipeModule } from "ngx-filter-pipe";
import { OrderModule } from "ngx-order-pipe";
import { NamePipe } from "../name.pipe";
import {DataTablesModule} from 'angular-datatables';
import { ChangesComponent } from './changes/changes.component';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { MatNativeDateModule } from '@angular/material/core';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    SidehomeComponent,
    Templete2aboutusComponent,
    Template2loginComponent,
    SnippetsComponent,
    NamePipe,
    ChangesComponent

  ],
  imports: [
    CommonModule,
    Templete2RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FilterPipeModule,
    OrderModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule
  ]
})
export class Templete2Module { }
