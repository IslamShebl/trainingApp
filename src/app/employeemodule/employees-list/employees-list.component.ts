import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeService } from '../service/employee.service';
import {ConfigService} from '../../sharedmodules/services/config.service'
import {Response} from '@angular/http';
@Component({
  selector: 'vf-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
  providers:[]
})
export class EmployeesListComponent implements OnInit {
 //@Output() selectedEmployee=new EventEmitter<Employee>();
 //@Output() selectedToUpdateEmployee=new EventEmitter<Employee>();

  Employees:Employee[];
  title=''
  constructor(private employeeService:EmployeeService
  ,private configService:ConfigService) {
   }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employees:Employee[])=>{
      const data=employees;
      this.Employees=data;
    },
  (error)=>console.log(error));
  this.employeeService.employeeListChanged.subscribe(
    (employee:Employee[])=>{this.Employees=employee}
  )
    this.title=this.configService.getCofigDetails().EmployeeListPage.title;
  }
  editEmployee(employee){

   // this.selectedToUpdateEmployee.emit(employee)
  }
  deleteEmployee(employeeId){
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response:Response)=>
      {
        //console.log(response)
      this.Employees=this.Employees.filter(p=>p.id!=employeeId)
      },
      (error)=>console.log(error)
    );
   // this.Employees=this.employeeService.getEmployees();
  }
}
