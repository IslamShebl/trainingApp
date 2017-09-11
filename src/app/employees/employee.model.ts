export class Employee {
    /*
    Employee props goes here
    Ex:dummy props*/

    public id:number;
    public name:string;
    public firstName:string;
    public lastName:string;
    public department:string;
    public age:number;    
    public image:string;
    constructor(id:number,firstname:string,lastname:string,age:number,department:string){
        this.id=id;
        this.firstName=firstname;
        this.department=department;
        this.lastName=lastname;
        this.age=age;
    }
    
}