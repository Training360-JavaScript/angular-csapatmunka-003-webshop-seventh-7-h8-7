import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(productList: Product[], search: string, key: string): Product[] {
    if (!Array.isArray(productList) || !search || !key) return productList;

    return productList.filter(product => product[key]
      .toString()
      .toLowerCase()
      .includes(search.toLowerCase())
      )
  }
}
