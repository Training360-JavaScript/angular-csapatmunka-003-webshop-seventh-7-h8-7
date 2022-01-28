import { ProductService } from 'src/app/service/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

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

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe(
      product => this.router.navigate(['/admin']),
      err => console.error(err)
    )
  }

  onClickDelete(product: Product): void {
    this.productService.delete(product).subscribe(
      product => this.router.navigate(['/admin']),
      err => console.error(err)
    )
  }

  onClickCreate(product: Product): void {
    this.productService.create(product).subscribe(
      product => this.router.navigate(['/admin']),
      err => console.error(err)
    )
  }

}
