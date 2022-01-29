import { ProductDetailsComponent } from './common/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { ProductCreateComponent } from './common/product-create/product-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'eletmod',
    component: Cat01Component,
  },
  {
    path: 'szepirodalom',
    component: Cat02Component,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'product-edit/:id',
    component: DataEditorComponent,
  },
  {
    path: 'product-create',
    component: ProductCreateComponent,
  },
  {
    path: 'books/:id',
    component: ProductDetailsComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
