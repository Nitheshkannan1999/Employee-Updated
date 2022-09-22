import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDetailsComponent } from './Employee/emp-details/emp-details.component';


const routing :Routes=[
  // { path :'dashboard', component : DashboardComponent },
  { path :'empDetails', component : EmpDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routing)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
