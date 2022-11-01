import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee.class';

@Pipe({
  name: 'empSearch'
})
export class EmpSearchPipe implements PipeTransform {

  transform(emps: Employee[], search: string = ""): Employee[] {
    search = search.toLowerCase();
    let selected: Employee[] = [];
    for(let e of emps) {
      if(e.name.toLowerCase().includes(search) || 
        (e.email !== null && e.email.toLowerCase().includes(search))) {
        selected.push(e);
      }
    };
    return selected;
  }

}
