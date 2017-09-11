//import {} ''
export class LogInService{
    logIn(userName:string,password:string){
        if(userName.toLocaleLowerCase()==='admin'&&password.toLocaleLowerCase()==='123'){
            return true;
        }else{
            return false;
        }
    }
}