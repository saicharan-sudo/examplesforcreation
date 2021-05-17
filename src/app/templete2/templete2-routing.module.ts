import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports: [RouterModule]
})
export class Templete2RoutingModule { }
