import { Component } from '@angular/core';
import { Iproduct } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
})
export class ProductdetailsComponent {
  everyproduct!: Iproduct;
  isLoading: boolean = true;
  msg = '';
  constructor(
    private bookservice: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL
    this.bookservice
      .getProductById(id)
      .then((data) => {
        this.everyproduct = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong';
      });
  }
  getback() {
    this.router.navigate(['products']);
  }
}
