import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

let dataTemp: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  products: Product = new Product();
  search: string = '';
  sortKey: string = '';
  direction: string = "";
  filterKey: string = '';
  list$: Observable<Product[]> = this.productService.getAll2()

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  onClickSort(data: string): void {
    if(dataTemp != data) {
      dataTemp = data;
      this.sortKey = data
      this.direction = "A...Z";
    } else {
      dataTemp = null;
      this.sortKey = data
      this.direction = "Z...A";
    }
  }

  onChangeSearch(event: Event, filterKey: string): void {
    this.search = (event.target as HTMLInputElement).value;
    this.filterKey = filterKey;
  }

}
