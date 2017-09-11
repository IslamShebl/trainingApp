import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeService } from '../service/employee.service';
import {ConfigService} from '../../services/config.service'
@Component({
  selector: 'vf-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
  providers:[]
})
export class EmployeesListComponent implements OnInit {
 @Output() selectedEmployee=new EventEmitter<Employee>();
 @Output() selectedToUpdateEmployee=new EventEmitter<Employee>();
  Employees:Employee[];
  title=''
  constructor(private employeeService:EmployeeService
  ,private configService:ConfigService) { }

  ngOnInit() {
    this.Employees=this.employeeService.getEmployees();
    this.title=this.configService.getCofigDetails().EmployeeListPage.title;
  }
  selectEmployee(employeeId){
    this.selectedEmployee.emit(employeeId);
  }
  editEmployee(employee){
    this.selectedToUpdateEmployee.emit(employee)
  }
  deleteEmployee(employeeId){
    this.employeeService.deleteEmployee(employeeId);
    this.Employees=this.employeeService.getEmployees();
  }
}
