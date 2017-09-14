import { Employee } from '../employee.model';
import { EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:3000/employees/';
const header = new Headers({ 'Content-Type': 'application/json' })

@Injectable()
export class EmployeeService {
    employeeListChanged = new EventEmitter<Employee[]>();
    constructor(private http: HttpClient) {}
    //Get All Employees
    getEmployees(): Observable<object> {
        return this.http.get(API_URL).map((data: Employee[]) => {
            return data;
        })
    }

    //Get Employee by Id
    getEmployee(employeeId):Observable<object> {
        return this.http.get(API_URL + employeeId).map((data:Employee)=>{
            return data;
        })
    }

    //Update Employee
    updateEmployee(employee: Employee) {
        return this.http.put(API_URL + employee.id, employee)
    }

    //Add Employee
    addEmployee(employee: Employee) {
        employee.id = Math.floor(Math.random() * 1000 + Math.random() * 10 + Math.random() * 100);
        return this.http.post(API_URL, employee)
    }

    //Delete Employee
    deleteEmployee(id) {
        return this.http.delete(API_URL + id);
    }
} 