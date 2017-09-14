import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params} from '@angular/router';

import {Employee} from '../employee.model';
//import {EmployeeService} from './service/employee.service';
@Component({
  selector: 'vf-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[]
})
export class EmployeesComponent implements OnInit {
  selectedEmployee:Employee;
  selectedtoUpdate:Employee;
  constructor(private route:Router,private activatedRoute:ActivatedRoute) { }
  ngOnInit() {
  }
  addEmployee(){
    this.route.navigate(['//employees/add'])
  }
}