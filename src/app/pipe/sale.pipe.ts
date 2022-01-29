import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'sale'
})
export class SalePipe implements PipeTransform {

  transform(productList: Product[] , limit: number = 0): Product[] {
    if(productList) {
      return productList.filter( (item) =>
      item["previousPrice"] ? item["previousPrice"] > limit : false )
    }
    return productList
  }

}
