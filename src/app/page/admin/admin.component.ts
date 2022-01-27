import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  products: Product = new Product();
  search: string = '';
  sortKey: string = '';
  filterKey: string = '';
  list$: Observable<Product[]> = this.productService.getAll2()

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  onClickSort(data: string): void {
    this.sortKey = data;
  }
  onChangeSearch(event: Event, filterKey: string): void {
    this.search = (event.target as HTMLInputElement).value;
    this.filterKey = filterKey;
  }

}
