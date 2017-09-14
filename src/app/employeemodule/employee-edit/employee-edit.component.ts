import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeService} from '../service/employee.service';
import {ConfigService } from '../../sharedmodules/services/config.service';
import {Router,ActivatedRoute} from '@angular/router';
import {Response} from '@angular/http';
@Component({
  selector: 'vf-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {  
  title="";
  employeeData:Employee;
  constructor(private employeeService:EmployeeService,
  private configService:ConfigService,
private activatedRoute:ActivatedRoute,
private route :Router)  { }

  ngOnInit() {
    var id=+this.activatedRoute.snapshot.params['id'];

    this.employeeService.getEmployee(id).subscribe((response:Response)=>{
      const data=response.json();
      this.employeeData=data;
      //console.log( data)
    },
  (error)=>console.log(error));
    //this.employeeData=this.employeeService.getEmployee(id);
    this.title=this.configService.getCofigDetails().EmployeeEditPage.title;
    
  }
  goBack(){
    this.route.navigate(['employees'])
  }
  updateEmployee(employee:Employee){
   console.log(employee)
    this.employeeService.updateEmployee(employee).subscribe(
      (response)=>this.goBack(),
      (error)=>console.log(error)
    )
  //this.goBack();
  }
}
