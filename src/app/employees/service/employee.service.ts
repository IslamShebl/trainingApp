
import {Employee} from '../employee.model';

export class EmployeeService{
    EmployeeList:Employee[]=[
        new Employee(1,'islam','ibrahem',24,'Department1'),
        new Employee(2,'e1','e2',24,'Department1'),
        new Employee(3,'islam','ibrahem',24,'Department1'),
        new Employee(4,'islam','ibrahem',24,'Department1'),
        new Employee(5,'islam','ibrahem',24,'Department1')
    ]
    getEmployees(){
        return this.EmployeeList;
    }
    getEmployee(employeeId){
       return this.EmployeeList.find(employee=>employee.id===employeeId);        
    }
    updateEmployee(){
    }
    addEmployee(employee:Employee){
        var id =this.getLastId();
        employee.id=id+1;
        this.EmployeeList.push(employee);
    }
    deleteEmployee(id){
        this.EmployeeList =this.EmployeeList.filter(employee=>employee.id !==id);
    }
    getLastId(){
        if (this.EmployeeList.length>0){
        return this.EmployeeList[this.EmployeeList.length-1].id;
        }else{
            return 0;
        }
    }
}