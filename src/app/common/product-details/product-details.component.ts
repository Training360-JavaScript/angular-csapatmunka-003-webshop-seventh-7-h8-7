import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    /* this.activatedRoute.params.subscribe((params) =>
      this.productService.getOne(params['id']).forEach((product: Product) => {
        this.product = product;
      })
    );
  }
*/
  }
  ngOnInit(): void {}
}
