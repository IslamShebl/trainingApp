import {NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {ToggleInputDirective} from './toggle-input.directive';
import {PasswordToggleComponent} from './password-toggle/password-toggle.component';
import {ConfigService} from './services/config.service';
import {AuthService} from './services/authentication.service';
@NgModule({
    imports:[RouterModule],
    declarations:[HeaderComponent,ToggleInputDirective,PasswordToggleComponent],
    exports:[CommonModule,HeaderComponent,ToggleInputDirective,PasswordToggleComponent]
    ,providers:[ConfigService,AuthService]
})
export class SharedModule{

}