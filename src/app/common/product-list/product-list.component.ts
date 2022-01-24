import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service'

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

  onChangeSort(data: string): void {
    this.sortKey = data;
  }

}
