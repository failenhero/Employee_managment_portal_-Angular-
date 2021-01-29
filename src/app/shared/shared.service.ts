import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department, Employee } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = 'http://localhost:5000/api';
  readonly DepartmentAPIUrl = 'http://localhost:5000/api/department';
  readonly EmployeeAPIUrl = 'http://localhost:5000/api/employee';
  readonly PhotoUrl = 'http://localhost:5000/Photos';

  constructor(
    private http: HttpClient
  ) {  }

  getDepList(): Observable<any[]> {
    return this.http.get<any[]>(this.DepartmentAPIUrl)
  }

  addDepartment(val: Department) {
    return this.http.post(this.DepartmentAPIUrl, val)
  }

  updateDepartment(val: Department) {
    return this.http.put(this.DepartmentAPIUrl, val)
  }

  deleteDepartment(id: any) {
    return this.http.delete(`http://localhost:5000/api/department/${id}`)
  }

  getEmpList(): Observable<any[]> {
    return this.http.get<any[]>(this.EmployeeAPIUrl)
  }

  addEmployee(val: Employee) {
    return this.http.post(this.EmployeeAPIUrl, val)
  }

  updateEmployee(val: Employee) {
    return this.http.put(this.EmployeeAPIUrl, val)
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.EmployeeAPIUrl}/${id}`)
  }

  uploadPhoto(val: string) {
    return this.http.post(this.EmployeeAPIUrl + 'SaveFile', val)
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.EmployeeAPIUrl + 'GetAllDepartmentNames')
  }

}
