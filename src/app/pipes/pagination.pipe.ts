import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(data: any[], itemsForPage: number, page: number): any[] {
    let first = +itemsForPage * (page - 1);
    return data.slice(first, first + (+itemsForPage));
  }

}
