import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string, productList: string[]): any {
    if (!Array.isArray(productList) || !value || value == " ") {
        return productList
    } else {
      return productList.filter( product => product.includes(value)
      );
    }
  }
}
