import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-pager2',
  templateUrl: './product-pager2.component.html',
  styleUrls: ['./product-pager2.component.scss']
})
export class ProductPager2Component implements OnInit {

  @Input() productList!: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
