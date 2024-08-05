import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    RouterLink,
    MatIconModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productservice: ProductsService
  ) {}
  @Input() everyproduct: any;

  @Input() id!: string;

  addtocart() {
    console.log(this.everyproduct);
    this.productservice.addToCart(this.everyproduct);
  }
}
