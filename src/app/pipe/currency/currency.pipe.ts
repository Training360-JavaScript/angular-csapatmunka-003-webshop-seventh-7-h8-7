import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number): any {
      if (!value) return value

      return new Intl.NumberFormat('hu-HU', {
        style: 'currency',
        currency: 'Huf',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value)
    }

  }
  /*
  */

  /*
  transform(value: number): any {
    if (value !== undefined && value !== null) {

      return value.toLocaleString('hu-HU', {
        style:"currency",
        currency:"HUF",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      } );

    } else {
      return
    }
  }
}
*/
