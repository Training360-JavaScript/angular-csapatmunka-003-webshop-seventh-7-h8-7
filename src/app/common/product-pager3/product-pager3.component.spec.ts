import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPager3Component } from './product-pager3.component';

describe('ProductPager3Component', () => {
  let component: ProductPager3Component;
  let fixture: ComponentFixture<ProductPager3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPager3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPager3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
