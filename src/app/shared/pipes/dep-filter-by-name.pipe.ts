import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../interfaces';

@Pipe({
  name: 'depFilterByName'
})
export class DepFilterByNamePipe implements PipeTransform {

  transform(departmenList: Department[], search: string): Department[] {
    if(!search.trim()){
      return departmenList
    }

    return departmenList.filter(department => {
      return department.DepartmentName.toString()
        .toLowerCase().includes(search.toLowerCase())
    })
  }

}
