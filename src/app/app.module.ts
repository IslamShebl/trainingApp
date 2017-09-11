import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { ToggleInputDirective } from './sharedcomponents/toggle-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
    HeaderComponent,
    EmployeeEditComponent,
    EmployeeCreateComponent,
    ToggleInputDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
