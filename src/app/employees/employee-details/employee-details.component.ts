import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeService } from '../service/employee.service';

@Component({
  selector: 'vf-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
employee:Employee;
@Output() backToIndex=new EventEmitter<void>();
@Input() id:number;
title="Employee Details"
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employee=this.employeeService.getEmployee(this.id);
  }
  goBackToIndex(){
    this.backToIndex.emit();
  }

}
