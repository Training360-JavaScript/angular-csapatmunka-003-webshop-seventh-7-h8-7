import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {


  transform(value: number): any {
    return new Intl.NumberFormat(new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'Huf',
      minimumFractionDigits: 0,
      maximumFractionDigits: 5
       }).format(value)
      )
  }

}
