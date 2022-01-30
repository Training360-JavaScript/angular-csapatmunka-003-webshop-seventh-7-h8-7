import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/model/product';

let keyTemp: any = null;

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(productList: Product[], key: string): Product[] {
    // console.log(`SortPIPE started: key = ${key} , keyTemp = ${keyTemp}` )

    if (!Array.isArray(productList) || !key) return productList;

    if (key != keyTemp) {
      keyTemp = key
      return this.sortUp(productList, key)

    }else if (key == keyTemp) {
      keyTemp = null;
      return this.sortDown(productList, key)
    }
    return productList

  }

  sortUp(productList: Product[], key: any): Product[] {
    // console.log(`SortPIPE => sortUp(). key = ${key} , keyTemp = ${keyTemp}`);
    let pl =  productList.sort((a, b) => {
      if (typeof a[key] == ("number" || "boolean") && typeof b[key] == ("number" || "boolean")) {
        return a[key] - b[key]
      } else if (typeof a[key] == "string" && typeof b[key] == "string") {
        return a[key].toLowerCase().localeCompare(b[key].toLowerCase())
      }
    }
    )
    // console.log("SortPIPE => sortUp() return =", pl)
    return pl
  }

  sortDown(productList: Product[], key: any): Product[] {
    console.log(`SortPIPE => sortDown(). key = ${key} , keyTemp = ${keyTemp}`);
    let pl = productList.sort((a, b) => {
      if (typeof a[key] == ("number" || "boolean") && typeof b[key] == ("number" || "boolean")) {
        return b[key] - a[key]
      }else if (typeof a[key] == "string" && typeof b[key] == "string") {
        return b[key].toLowerCase().localeCompare(a[key].toLowerCase())
      }
    }
    )
    console.log("SortPIPE => sortDown() return =", pl)
    return pl
  }
}
