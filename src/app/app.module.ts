import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { ProductPagerComponent } from './common/product-pager/product-pager.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { FilterPipe } from './pipe/filter/filter.pipe';
import { SortPipe } from './pipe/sort/sort.pipe';
import { CategoryPipe } from './pipe/category/category.pipe';
import { FeaturedPipe } from './pipe/featured/featured.pipe';

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
    FeaturedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
