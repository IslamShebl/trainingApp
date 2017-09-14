import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {EmployeesListComponent} from './employees-list/employees-list.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';
import {EmployeeRoutingModule} from './employee-routing.module';
import {EmployeeService} from './service/employee.service';

@NgModule(
    {
        declarations:[
            EmployeesComponent,
            EmployeesListComponent,
            EmployeeCreateComponent,
            EmployeeDetailsComponent,
            EmployeeEditComponent
        ]
        ,imports :[
            CommonModule, ReactiveFormsModule,FormsModule
        ,EmployeeRoutingModule
        ],
        providers:[EmployeeService]
       })
export class EmployeeModule{

}