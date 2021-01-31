import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './department/department.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { DepfilterByIdPipe } from './shared/pipes/dep-Filter-by-id.pipe';
import { DepFilterByNamePipe } from './shared/pipes/dep-filter-by-name.pipe';
import { EmpFilterByIdPipe } from './shared/pipes/emp-filter-by-id.pipe';
import { EmpFilterByNamePipe } from './shared/pipes/emp-filter-by-name.pipe';
import { EmpFilterByDepPipe } from './shared/pipes/emp-filter-by-dep.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    AddEditDepComponent,
    ShowDepComponent,
    EmployeeComponent,
    AddEditEmpComponent,
    ShowEmpComponent,
    DepfilterByIdPipe,
    DepFilterByNamePipe,
    EmpFilterByIdPipe,
    EmpFilterByNamePipe,
    EmpFilterByDepPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
