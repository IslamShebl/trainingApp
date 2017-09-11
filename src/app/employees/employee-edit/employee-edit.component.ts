import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Employee} from '../employee.model';
import {EmployeeService} from '../service/employee.service';
import {ConfigService } from '../../services/config.service';
@Component({
  selector: 'vf-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  @Output() backToIndex=new EventEmitter<void>();  
  title="";
  employeeData:Employee;
  @Input() id:number;
  constructor(private employeeService:EmployeeService,
  private configService:ConfigService) { }

  ngOnInit() {
    this.title=this.configService.getCofigDetails().EmployeeEditPage.title;
    this.employeeData=this.employeeService.getEmployee(this.id);
    
  }
  goBack(){
    this.backToIndex.emit();    
  }
  updateEmployee(){
  this.goBack();
  }
}
