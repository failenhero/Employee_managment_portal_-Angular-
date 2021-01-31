import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../interfaces';

@Pipe({
  name: 'empFilterByName'
})
export class EmpFilterByNamePipe implements PipeTransform {

  transform(employeeList: Employee[], search: string): Employee[] {
    if(!search.trim()){
      return employeeList
    }

    return employeeList.filter(employee => {
      return employee.EmployeeName.toString().toLowerCase()
              .includes(search.toLowerCase())
    })
  }

}
