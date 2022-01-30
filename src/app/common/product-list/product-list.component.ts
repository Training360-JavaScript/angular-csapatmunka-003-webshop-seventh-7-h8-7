import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

let keyTemp: any = null;
let multiplier: number = 1;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  search: string = '';
  sortKey: string = '';
  filterKey: string = '';
  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit(): void { }

  onClickSort(data: string): void {
    this.sortKey = data;
    // console.log(`start onClickSort(), data = ${data} , keytemp = ${keyTemp}`);
    this.shorting(this.products, data);
  }
  onChangeSearch(event: Event, filterKey: string): void {
    this.search = (event.target as HTMLInputElement).value;
    this.filterKey = filterKey;
  }

  shorting(productList: Product[], key: string): Product[] {
    // console.log(`onClickSort() started sorting(), key = ${key} , keytemp = ${keyTemp}`)

    if (!Array.isArray(productList) || !key) return productList;

    let pl = productList.sort( (a, b) => {
      if (typeof a[key] == ("number" || "boolean") && typeof b[key] == ("number" || "boolean")) {
        return (a[key] - b[key]) * multiplier;
      } else if (typeof a[key] == "string" && typeof b[key] == "string") {
        // console.log((a[key].toLowerCase().localeCompare(b[key].toLowerCase())));
        return (a[key].toLowerCase().localeCompare(b[key].toLowerCase())) * multiplier
      }
    }
    )
    multiplier = multiplier * -1
    // console.log("onClickSort() => sortUp() return =", pl)
    return pl

}

}
