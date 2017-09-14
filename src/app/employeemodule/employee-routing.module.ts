import {NgModule} from  '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import {AuthGuard} from '../auth-guard.service';
const  employeeRouting:Routes=[
    {
        path:'',component:EmployeesComponent
        , children:[
            {path:'',component:EmployeesListComponent},
            {path:'add',component:EmployeeCreateComponent
        }
          ,{path:'edit/:id',component:EmployeeEditComponent
        }
          ,{ path:':id',component:EmployeeDetailsComponent
        }]
        }
     ] 
          


@NgModule({
    imports:[
        RouterModule.forChild(employeeRouting)
    ],exports:[RouterModule]
})
export class EmployeeRoutingModule{

}