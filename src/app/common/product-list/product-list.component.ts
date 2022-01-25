import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service'

let keyTemp: any = null;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  search: string = '';
  sortKey: string = '';
  filterKey: string = '';
  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickSort(data: string): void {
    this.sortKey = data;
    this.shorting(this.products, data);
  }
  onChangeSearch(event: Event, filterKey: string): void {
    this.search = (event.target as HTMLInputElement).value;
    this.filterKey = filterKey;
  }

  shorting(productList: Product[], key: string): Product[] {

    if (!Array.isArray(productList) || !key) return productList;

    if(key != keyTemp ) {
      keyTemp = key
      return productList.sort( (a, b) => {
        if(typeof a[key] === "number" && typeof b[key] === "number" ) {
          return a[key] - b[key]
        }
        if(typeof a[key] == "string" && typeof b[key] == "string" ) {
          return a[key].toLowerCase().localeCompare(b[key].toLowerCase())
          }
        }
        )
      }

      if(key == keyTemp ) {
        keyTemp = null;

        return productList.sort( (a, b) => {
          if(typeof a[key] === "number" && typeof b[key] === "number"  ) {
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
