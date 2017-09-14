import { Component, OnInit,ViewChild } from '@angular/core';
import {LogInService} from '../service/login.service';
import {ConfigService} from '../../sharedmodules/services/config.service';
import {ToggleInputDirective} from '../../sharedmodules/toggle-input.directive';
import {FormGroup,FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {Response} from '@angular/http';

@Component({
  selector: 'vf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]

})
export class LoginComponent implements OnInit {
  @ViewChild(ToggleInputDirective)input:ToggleInputDirective;
  title='';
  type='text';
//  Email='';
  Logged=false;
  //Password='';
  error='';
  show=false;
  
  registerForm=new FormGroup({
    'Email':new FormControl(),
    'Password': new FormControl()
  })
  constructor(private logInService:LogInService,private configService:ConfigService,private route:Router) { }
  ngOnInit() {
    
  this.title=this.configService.getCofigDetails().LoginPage.title;
  }
  login(){
      //this.Logged=
      
      this.logInService.logIn(this.registerForm.get('Email').value,this.registerForm.get('Password').value)
      .subscribe(
        (response)=>{
          if(response==true){
            this.route.navigate(['employees'])
          }
          else{
              this.error='Wrong name or password!!'
          }
        }
      );
      
  }
  toggleShow()
  {
    this.show=!this.show;
    console.log(this.input)
    if(this.show){
      this.input.changeType("text");
    }else{
      this.input.changeType("password");
    }
  }
}
