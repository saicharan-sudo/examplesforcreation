import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { SidehomeComponent } from './templete2/sidehome/sidehome.component';
import { Templete2aboutusComponent } from './templete2/templete2aboutus/templete2aboutus.component';
import { Template2loginComponent } from './templete2/template2login/template2login.component';
import { Templete2Module } from "../app/templete2/templete2.module";
import { SnippetsComponent } from './templete2/snippets/snippets.component';
import { ChangesComponent } from './templete2/changes/changes.component';
const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: 'login', component: LoginformComponent },
  {
    path: 'sidehome', component: SidehomeComponent,
    children: [
      { path: 'view', component: Templete2aboutusComponent },
      { path: 'signup', component: Template2loginComponent },
      { path: 'signup/:id', component: Template2loginComponent },
      { path: 'snippet', component: SnippetsComponent },
      { path: 'changes', component: ChangesComponent }
    ]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes), Templete2Module],
  exports: [RouterModule]
})
export class AppRoutingModule { }
