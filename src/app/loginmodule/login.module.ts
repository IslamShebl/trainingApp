import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {LoginComponent} from './logincomponent/login.component'
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ToggleInputDirective } from '../sharedmodules/toggle-input.directive';
import { PasswordToggleComponent } from '../sharedmodules/password-toggle/password-toggle.component';
import { SharedModule} from '../sharedmodules/shared.module';
import {LogInService} from './service/login.service';
@NgModule(
    {
        declarations:[
            LoginComponent
        ]
        ,imports :[
            CommonModule, ReactiveFormsModule,FormsModule
        ,SharedModule]
        ,providers:[LogInService]
    }
)
export class LoginModule{

}