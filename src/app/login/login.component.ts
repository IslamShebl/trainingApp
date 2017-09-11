import { Component, OnInit,ViewChild } from '@angular/core';
import {LogInService} from '../services/login.service';
import {ConfigService} from '../services/config.service';
import {ToggleInputDirective} from '../sharedcomponents/toggle-input.directive';
@Component({
  selector: 'vf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LogInService,ConfigService],

})
export class LoginComponent implements OnInit {
  @ViewChild(ToggleInputDirective)input:ToggleInputDirective;
  title='';
  type='text';
  showPassword=false;
  Email='';
  Logged=false;
  Password='';
  error='';
  show=false;
  constructor(private logInService:LogInService,private configService:ConfigService) { }
  ngOnInit() {
  this.title=this.configService.getCofigDetails().LoginPage.title;
  }
  login(){
    //if(this.Email==='Admin'&&this.Password==='Admin'){
      //console.log("Success")
      this.Logged=this.logInService.logIn(this.Email,this.Password);
      if(this.Logged==false){
          this.error='Wrong name or password!!'
      }
    //}else{
     // console.log("Failed")
    //}
  }
  toggleShow()
  {
    this.show=!this.show;
    if(this.show){
      this.input.changeType("text");
    }else{
      this.input.changeType("password");
    }
  }
}
