export class ConfigService{
    data={
        LoginPage:{
            title:'Login'
        },
        EmployeeListPage:{
            title:'Employees List'
        },
        EmployeeDetailsPage:{
            title:'Employee details'
        }
    ,EmployeeEditPage:{
        title:'Edit Employee'
    },
    AddEmployeePage:{
        title:'Add new employee'
    }
    }
        
    getCofigDetails(){
        
        return this.data;
        }
    }
