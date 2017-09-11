import { Directive,HostBinding } from '@angular/core';

@Directive({
  selector: '[vfToggleInput]'
})
export class ToggleInputDirective {
@HostBinding() type:string;
constructor() { 
  this.type='password'
}
changeType(type:string){
  this.type=type;
}

}
