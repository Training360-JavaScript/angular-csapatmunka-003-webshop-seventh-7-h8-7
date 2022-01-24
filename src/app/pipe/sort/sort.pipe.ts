import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';

let keyTemp: any = null;

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(productList: Product[], key: string): Product[] {

    if (!Array.isArray(productList) || !key) return productList;

      if(key != keyTemp ) {
        keyTemp = key

        return productList.sort( (a, b) => {
          if(typeof a[key] === "number" || "boolean"  && typeof b[key] === "number" || "boolean"  ) {
            return a[key] - b[key]
          }
          if(typeof a[key] === "string" && typeof b[key] === "string" ) {
            return a[key].localeCompare(b[key])
          }
        }
        )
      }

      if(key == keyTemp ) {
        keyTemp = null;

        return productList.sort( (a, b) => {
          if(typeof a[key] === "number" || "boolean"  && typeof b[key] === "number" || "boolean"  ) {
            return b[key] - a[key]
          }
          if(typeof a[key] === "string" && typeof b[key] === "string" ) {
            return b[key].localeCompare(a[key])
          }
        }
        )
      }
      return productList
}
}
