import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor() {}

  // ➕ Add to cart
  addToCart(book: any) {
    this.cartItems.push(book);
    this.updateCartCount();
  }

  // ➖ Remove from cart (by index)
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.updateCartCount();
  }

  // 📦 Get all cart items
  getCartItems() {
    return this.cartItems;
  }

  // 🧹 Clear cart
  clearCart() {
    this.cartItems = [];
    this.updateCartCount();
  }

  // 🔄 Update cart count
  private updateCartCount() {
    this.cartCountSubject.next(this.cartItems.length);
  }
}
