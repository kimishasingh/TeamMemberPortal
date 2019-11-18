import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee/employee-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EmployeeRoutingModule,
    HttpModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }