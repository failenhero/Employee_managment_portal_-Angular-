import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../interfaces';

@Pipe({
  name: 'empFilterById'
})
export class EmpFilterByIdPipe implements PipeTransform {

  transform(employeeList: Employee[], search: string): Employee[] {
    if(!search.trim()){
      return employeeList
    }

    return employeeList.filter(employee => {
      return employee.EmployeeID.toString().toLowerCase()
              .includes(search.toLowerCase())
    })
  }

}
