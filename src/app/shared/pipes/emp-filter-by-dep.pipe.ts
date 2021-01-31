import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../interfaces';

@Pipe({
  name: 'empFilterByDep'
})
export class EmpFilterByDepPipe implements PipeTransform {

  transform(employeeList: Employee[], search: string): Employee[] {
    if(!search.trim()){
      return employeeList
    }

    return employeeList.filter(employee => {
      return employee.Department.toString().toLowerCase()
              .includes(search.toLowerCase())
    })
  }

}
