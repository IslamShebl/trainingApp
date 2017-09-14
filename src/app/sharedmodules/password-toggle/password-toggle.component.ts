import { Component, OnInit,ViewChild } from '@angular/core';
import {ToggleInputDirective} from '../toggle-input.directive';

@Component({
  selector: 'vf-password-toggle',
  templateUrl: './password-toggle.component.html',
  styleUrls: ['./password-toggle.component.css']
})
export class PasswordToggleComponent implements OnInit {
  type='text';
  show=false;
  @ViewChild(ToggleInputDirective)input:ToggleInputDirective;
  constructor() { }

  ngOnInit() {
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
