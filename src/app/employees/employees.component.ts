import { Component, OnInit } from '@angular/core';
import {Employee} from './employee.model';
import {EmployeeService} from './service/employee.service';
@Component({
  selector: 'vf-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeeService]
})
export class EmployeesComponent implements OnInit {
  selectedEmployee:Employee;
  selectedtoUpdate:Employee;
  DetailsView:boolean=false;
  IsUpdate:boolean=false;
  createNew:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onViewDetails(selectedEmp:Employee){
    this.DetailsView=true;    
    this.selectedEmployee=selectedEmp;
  }
  viewIndex(){
    this.selectedEmployee=null;
    this.createNew=false;
    this.IsUpdate=false;
    this.DetailsView=false;
  }
  
  enableUpdateView(selectedEmp:Employee){
    console.log(selectedEmp);
    this.IsUpdate=true;
    this.selectedtoUpdate=selectedEmp;
  }
  addEmployee(){
    this.createNew=true;
  }
}
