import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(productList: Product[], key: string, sortDirection: string = 'A...Z'): Product[] {
      if (!Array.isArray(productList) || !key) return productList;
      if (!['A...Z', 'Z...A'].includes(sortDirection)) return productList;
      if (!sortDirection) sortDirection = 'A...Z';

      const direction = (sortDirection === 'A...Z') ? 1 : -1;

      return productList.sort((a, b) => {
        if (typeof (a[key]) === 'number' && typeof (b[key]) === 'number') {
          return  direction * ( a[key] - b[key] );
        }
        const dataA = String(a[key]).toLowerCase();
        const dataB = String(b[key]).toLowerCase();
        return direction * dataA.localeCompare(dataB);
      });

  }
}
