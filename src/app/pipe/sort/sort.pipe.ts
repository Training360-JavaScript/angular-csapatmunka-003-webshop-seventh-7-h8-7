import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  keyTemp: any = null;

  transform(productList: Product[], search: string, key: string): Product[] {

    if (!Array.isArray(productList) || !search || !key) return productList;

    if(key) {
      if(key != this.keyTemp ){
        this.keyTemp = key
        return productList.sort((a, b) => a[key] - b[key])
      }

      if(key == this.keyTemp ){
        this.keyTemp = null;
        return productList.sort((a, b) => b[key] - a[key])
      }
    }

    return productList
  }
}
