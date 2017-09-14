import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeService} from '../service/employee.service';
import { ConfigService} from '../../sharedmodules/services/config.service';
import {Router} from '@angular/router';
@Component({
  selector: 'vf-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
  providers:[]
})
export class EmployeeCreateComponent implements OnInit {
  //@Output() backToIndex=new EventEmitter<boolean>(); 
  title='';
  firstName='';
  lastName='';
  department='';
  age:number;
  constructor(private employeeService:EmployeeService,
    private configService:ConfigService,
    private route:Router) {

   }
  goBack(){
    this.route.navigate(['employees'])
  }
  ngOnInit() {
    this.title=this.configService.getCofigDetails().AddEmployeePage.title;
  }

  addEmployee(){
    const emp=new Employee(0,this.firstName,this.lastName,this.age,this.department)

    this.employeeService.addEmployee(emp).subscribe(
      (response)=>this.goBack(),
      (error)=>console.log(error)
    );
  }
}
