import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-pager3',
  templateUrl: './product-pager3.component.html',
  styleUrls: ['./product-pager3.component.scss']
})
export class ProductPager3Component implements OnInit {

  @Input() productList!: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
