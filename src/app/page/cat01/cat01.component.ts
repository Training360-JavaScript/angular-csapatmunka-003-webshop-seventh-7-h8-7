import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  // productList: Product[] = this.productService.getAll()

  productList$: Observable<Product[]> = this.productService.getAll2()


  constructor(
    private productService: ProductService
    ) { }

  ngOnInit(): void {
  }

}
