import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';
import { ConfigService } from '../../sharedmodules/services/config.service'
import { Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'vf-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
  providers: []
})
export class EmployeesListComponent implements OnInit {
  Employees: Employee[];
  title = ''
  constructor(private employeeService: EmployeeService
    , private configService: ConfigService) {
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(((employees: Employee[]) => this.Employees = employees),
      (error) => console.log(error))
    this.title = this.configService.getCofigDetails().EmployeeListPage.title;
  }
  deleteEmployee(employeeId) {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: Response) => {
        this.Employees = this.Employees.filter(p => p.id != employeeId)
      },
      (error) => console.log(error)
    );
  }
}
