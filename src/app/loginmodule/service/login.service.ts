import {EventEmitter} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import { Injectable }    from '@angular/core';
import 'rxjs/Rx';
const API_URL='http://localhost:3000/user';
import {AuthService} from '../../sharedmodules/services/authentication.service';


@Injectable()
export class LogInService{

    constructor(private http:Http
    ,private authService:AuthService){

    }
    logIn(userName:string,password:string){
        console.log(userName)
        return this.http.get(API_URL).map(
            (response:Response)=>
            {
                const data =response.json();
                //console.log(data)
                if(data.email.toLocaleLowerCase()===userName.toLocaleLowerCase()&&data.password.toLocaleLowerCase()===password.toLocaleLowerCase()){
                    this.authService.setToken(true);
                    return true;

                }else{
                    return false
                }
            }
        );
/*
        if(userName.toLocaleLowerCase()==='admin'&&password.toLocaleLowerCase()==='123'){
            return true;
        }else{
            return false;
        }*/
    }
    logOut(){
        this.authService.setToken(false);
    }
}