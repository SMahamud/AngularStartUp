import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const routes: Routes = [ 
  //The order of the routes in the configuration matters and this is by design.
  { path:'employees',component: EmployeeListComponent  },
  {path:'create',component: CreateEmployeeComponent},
  {path:'update/:id', component: UpdateEmployeeComponent , data:{title:'you can update the employee info'}},
  {path:'details/:id', component: EmployeeDetailsComponent},
  {path:'default', component : DefaultPageComponent},
  { path:'', redirectTo:'/default', pathMatch:'full' },
  { path: '**' , component:NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
