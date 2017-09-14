import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeService } from '../service/employee.service';
import {Router,ActivatedRoute} from '@angular/router';
import {Response} from '@angular/http';
@Component({
  selector: 'vf-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
employee:Employee;
title="Employee Details"
  constructor(private employeeService:EmployeeService
  ,private activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    const id =+this.activatedRoute.snapshot.params['id'];  
    this.employeeService.getEmployee(id).subscribe((response:Response)=>{
      const data=response.json();
      this.employee=data;
      //console.log( data)
    },
  (error)=>console.log(error));
 
    //this.employee=this.employeeService.getEmployee(id);
  }
  goBackToIndex(){
    this.route.navigate(['employees']);
  }

}
