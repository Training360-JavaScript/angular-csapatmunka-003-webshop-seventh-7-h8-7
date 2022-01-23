import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(productList: Product[], search: boolean): Product[] {
    if (!Array.isArray(productList) || !search) return productList;

    return productList.filter(product => product[`featured`] = search ? true: false
      )
  }
}
