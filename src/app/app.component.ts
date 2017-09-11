import { Component } from '@angular/core';
import {EmployeeService} from './employees/service/employee.service'
@Component({
  selector: 'vf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})
export class AppComponent {
  title = 'vf';
}
