import { Injectable } from '@angular/core';
import { Iproduct } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  cart: any;
  constructor() {}
  getProducts(): Promise<Iproduct> {
    return fetch(`https://66afb9eeb05db47acc5aa017.mockapi.io/products`).then(
      (res) => res.json()
    );
  }
  getProductById(id: string) {
    return fetch(
      `https://66afb9eeb05db47acc5aa017.mockapi.io/products/${id}`
    ).then((res) => res.json());
  }
  addToCart(everyproduct: Iproduct) {
    return fetch(`https://66afb9eeb05db47acc5aa017.mockapi.io/products`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        image: everyproduct.image,
        price: everyproduct.price,
        name: everyproduct.name,
        quantity: 1,
        type: 'liked',
      }),
    });
  }
  deleteCart(id: any) {
    return fetch(`https://66afb9eeb05db47acc5aa017.mockapi.io/products/${id}`, {
      method: 'DELETE',
    });
  }
}
