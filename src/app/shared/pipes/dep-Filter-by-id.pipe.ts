import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../interfaces';

@Pipe({
  name: 'depfilterById'
})
export class DepfilterByIdPipe implements PipeTransform {

  transform(departmentList: Department[], departmentIdFilter: string): Department[] {
    if(!departmentIdFilter.trim()){
      return departmentList
    }

    return departmentList.filter(department => {
      return department.DepartmentID.toString()
      .toLowerCase().includes(departmentIdFilter.toLowerCase());
    })
  }

}
