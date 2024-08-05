import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductslistComponent } from './productslist/productslist.component';

export interface Iproduct {
  id: string;
  image: string;
  name: string;
  price: string;
  description: string;
  quantity: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'website';
}
