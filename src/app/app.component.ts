import { Component } from '@angular/core';
import {EmployeeService} from './employeemodule/service/employee.service'
@Component({
  selector: 'vf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})
export class AppComponent {
  title = 'vf';
}
