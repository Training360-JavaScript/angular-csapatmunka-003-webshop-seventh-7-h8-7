import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductPagerComponent } from './common/product-pager/product-pager.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductDetailsComponent } from './common/product-details/product-details.component';

import { FilterPipe } from './pipe/filter/filter.pipe';
import { SortPipe } from './pipe/sort/sort.pipe';
import { CategoryPipe } from './pipe/category/category.pipe';
import { FeaturedPipe } from './pipe/featured/featured.pipe';
import { CurrencyPipe } from './pipe/currency/currency.pipe';
import { ShufflePipe } from './pipe/shuffle.pipe';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { ProductCreateComponent } from './common/product-create/product-create.component';
import { SalePipe } from './pipe/sale.pipe';
import { ConverterPipe } from './pipe/converter/converter.pipe';
import { ProductPager2Component } from './common/product-pager2/product-pager2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductCardComponent,
    ProductPagerComponent,
    ProductListComponent,
    FilterPipe,
    SortPipe,
    CategoryPipe,
    FeaturedPipe,
    CurrencyPipe,
    FooterComponent,
    ProductDetailsComponent,
    ShufflePipe,
    AdminComponent,
    DataEditorComponent,
    ProductCreateComponent,
    SalePipe,
    ConverterPipe,
    ProductPager2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
