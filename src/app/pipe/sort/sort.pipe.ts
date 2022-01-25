import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';

let keyTemp: any = null;

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(productList: Product[], key: string): Product[] {

    console.log(`SortPipe started: key, keytemp = `, key, keyTemp )
    if (!Array.isArray(productList) || !key) return productList;

    if(key != keyTemp ) {
      keyTemp = key
      console.log("keyTemp", keyTemp)
      return productList.sort( (a, b) => {
        if(typeof a[key] === "number" && typeof b[key] === "number" ) {
          console.log("number", a[key])
          return a[key] - b[key]
        }
        if(typeof a[key] == "string" && typeof b[key] == "string" ) {
          console.log("string", a[key])
          return a[key].toLowerCase().localeCompare(b[key].toLowerCase())
          }
        }
        )
      }

      if(key == keyTemp ) {
        console.log("keyTemp", keyTemp);
        keyTemp = null;

        return productList.sort( (a, b) => {
          if(typeof a[key] === "number" && typeof b[key] === "number") {
            return b[key] - a[key]
          }
          if(typeof a[key] === "string" && typeof b[key] === "string" ) {
            return b[key].toLowerCase().localeCompare(a[key].toLowerCase())
          }
        }
        )
      }
      return productList
}
}
