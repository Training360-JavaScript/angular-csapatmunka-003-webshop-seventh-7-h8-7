import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Observable, switchMap } from 'rxjs';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {


  product = new Product();

  product$: Observable<Product> = this.ar.params.pipe(
    switchMap( params => this.productService.getOne(params['id']))
  )


  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClickCreate(product: Product): void {
    this.productService.create(product).subscribe(
      product => this.router.navigate(['/admin']),
      err => console.error(err)
    )
  }



}
