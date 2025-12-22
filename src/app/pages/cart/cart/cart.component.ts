import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <div class="container mt-4">
      <h2>🛒 My Cart</h2>

      <div *ngIf="cartItems.length === 0" class="alert alert-info">
        Your cart is empty
      </div>

      <table *ngIf="cartItems.length > 0" class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of cartItems; let i = index">
            <td>{{ i + 1 }}</td>
            <td>{{ item.title }}</td>
            <td>
              <button class="btn btn-sm btn-danger" (click)="removeItem(i)">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div *ngIf="cartItems.length > 0" class="mt-3">
        <strong>Total Items: {{ cartItems.length }}</strong>
        <button class="btn btn-warning btn-sm ml-2" (click)="clearCart()">
          Clear Cart
        </button>
      </div>
    </div>
  `
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
    // Optional: subscribe to live changes
    this.cartService.cartCount$.subscribe(() => this.loadCart());
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
