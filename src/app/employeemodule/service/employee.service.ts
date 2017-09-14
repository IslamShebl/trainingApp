import {Employee} from '../employee.model';
import {EventEmitter} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import { Injectable }    from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx';
const API_URL='http://localhost:3000/employees/';
const header =new Headers({'Content-Type':'application/json'})

@Injectable()
export class EmployeeService{
    
constructor(private http:Http){

}
    employeeListChanged=new EventEmitter<Employee[]>();
  
    getEmployees(){
       return this.http.get(API_URL).map(
           (response:Response)=>
           {
               const data =response.json();
               return data;
           }
       )
    }
    getEmployee(employeeId){
     return this.http.get(API_URL+employeeId)
    }
    updateEmployee(employee:Employee){
        return this.http.put(API_URL+employee.id,employee,{headers:header})
    }
    addEmployee(employee:Employee){
        employee.id=Math.floor(Math.random()*1000+Math.random()*10+Math.random()*100);
        return this.http.post(API_URL,employee,{headers:header})
            
        //this.http.post(API_URL,)
    }
    deleteEmployee(id){
       return this.http.delete(API_URL+id,{headers:header});
        //this.EmployeeList =this.EmployeeList.filter(employee=>employee.id !==id);
        
        //this.employeeListChanged.emit(this.EmployeeList);
    }
} 