import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

    transform(productList: Product[], catId: string): Product[] {
    if (!Array.isArray(productList) || !catId) {
      return productList
    }

    return productList.filter(item => catId == item.catId);

  }

}
