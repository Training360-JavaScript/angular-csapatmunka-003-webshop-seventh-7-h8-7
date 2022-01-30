import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(categoryName: string ): string {
    if(!categoryName) return '' ;
    if(categoryName == "cat-1") return "Életmód"
    if(categoryName == "cat-2") return "Szépirodalom"
    return ''
  }

}
