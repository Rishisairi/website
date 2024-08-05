import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Route, Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [ProductsComponent, FormsModule],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.scss',
})
export class ProductslistComponent {
  products: any;
  filteredproducts: any;
  constructor(
    private productservice: ProductsService,
    private router: Router
  ) {}
  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    this.productservice.getProducts().then((data) => {
      this.products = data;
      this.filteredproducts = this.products;
    });
  }
}
