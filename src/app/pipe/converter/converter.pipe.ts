import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {
  // arr: string[] = [
  //   {cat-1: String = "Életmód"} ,
  //   {cat-2: String = "Szépirodalom"}
  // ]

  transform(arr: string , categoryName: string ): string {
    if(!categoryName) return '' ;
    if(categoryName == "cat-1") return "Életmód"
    if(categoryName == "cat-2") return "Szépirodalom"
    return ''
  }

}
