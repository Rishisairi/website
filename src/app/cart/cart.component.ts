import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Iproduct } from '../app.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ProductsComponent } from '../products/products.component';
import { ProductslistComponent } from '../productslist/productslist.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    ProductslistComponent,
    RouterLink,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  everyproduct!: Iproduct;
  isLoading: boolean = true;
  msg = '';
  quantity = 0;
  cartitems: any;
  totalData: any;
  constructor(
    private productservice: ProductsService,
    private route: ActivatedRoute, // DI
    private router: Router
  ) {}
  // ngOnInit() {
  //   let id = this.route.snapshot.paramMap.get('id') as string; // From URL
  //   this.productservice
  //     .getProductById(id)
  //     .then((data) => {
  //       this.everyproduct = data;
  //       this.isLoading = false;
  //     })
  //     .catch(() => {
  //       this.isLoading = false;
  //       this.msg = 'Something went wrong';
  //     });
  // }

  ngOnInit() {
    this.cartitems = this.productservice.getProducts().then((res: any) => {
      this.totalData = res.filter((data: any) => data.type === 'liked');
    });
  }

  incrementquantity() {
    this.quantity++;
  }

  orders() {
    this.router.navigate(['orders']);
  }
  deleteCart(id: any) {
    this.productservice.deleteCart(id).then((res: any) => {
      this.cartitems = this.productservice.getProducts().then((res: any) => {
        this.totalData = res.filter((data: any) => data.type === 'liked');
      });
    });
  }
}
