import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomepageComponent } from './employee-homepage/employee-homepage.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

const routes: Routes = [
  {
    path: '', component: EmployeeHomepageComponent, children: [
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'list-employee', component: ListEmployeeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
