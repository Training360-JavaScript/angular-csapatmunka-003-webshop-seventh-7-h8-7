import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPager2Component } from './product-pager2.component';

describe('ProductPager2Component', () => {
  let component: ProductPager2Component;
  let fixture: ComponentFixture<ProductPager2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPager2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPager2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
