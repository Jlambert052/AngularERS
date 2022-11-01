import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { E404Component } from './misc/e404/e404.component';

import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeChangeComponent } from './employee/employee-change/employee-change.component';

const routes: Routes = [
  { path: "", redirectTo: "/emp/login", pathMatch: "full" },
  
  { path: "emp/login", component: EmployeeLoginComponent},
  { path: "emp/list", component: EmployeeListComponent},
  { path: "emp/create", component: EmployeeCreateComponent},
  { path: "emp/detail/:id", component: EmployeeDetailComponent},
  { path: "emp/change/:id", component: EmployeeChangeComponent},

  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },

  { path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
