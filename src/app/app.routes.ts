import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ProductslistComponent } from './productslist/productslist.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductslistComponent,
  },
  {
    path: 'products/:id',
    component: ProductdetailsComponent,
  },
  {
    path: 'products/cart/:id',
    component: CartComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
