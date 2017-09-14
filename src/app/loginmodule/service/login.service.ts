import {EventEmitter} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import { Injectable }    from '@angular/core';
import{Observable} from'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const API_URL='http://localhost:3000/user';
import {AuthService} from '../../sharedmodules/services/authentication.service';
export class User{
    public email:string;
    public password:string;
    
    constructor( email:string, password:string){
        this.email=email;
        this.password=password
    }
}

@Injectable()
export class LogInService{

    constructor(private http:HttpClient
    ,private authService:AuthService){

    }
    logIn(userName:string,password:string):Observable<boolean>{
        return this.http.get(API_URL).map((user:User)=>{
            if(user.email.toLocaleLowerCase()==userName.toLocaleLowerCase()
                &&user.password.toLocaleLowerCase()==password.toLocaleLowerCase()){
                    this.authService.setToken(true);                    
                    return true
                }else{
                    return false;
                }
        });
    }
    
    logOut(){
        this.authService.setToken(false);
    }
}