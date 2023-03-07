import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(data: any[], order: string, column: string): any[] {
    if (order === 'asc') {
      data.sort((a: any, b: any) => {
        if (a[column] > b[column]) {
          return 1;
        }
        if (a[column] < b[column]) {
          return -1;
        } else {
          return 0;
        }
      })
    } else {
      data.sort((a: any, b: any) => {
        if (a[column] > b[column]) {
          return -1;
        }
        if (a[column] < b[column]) {
          return 1;
        } else {
          return 0;
        }
      })
    }
    return Object.assign([], data);
  }

}
