import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg custom-header">
      <div class="container">
        <div class="navbar-nav mx-auto">
          <a class="nav-link" routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">Home</a>
          <a class="nav-link" routerLink="/contact" routerLinkActive="active-link">Contact</a>
          <a class="nav-link" routerLink="/about" routerLinkActive="active-link">About</a>
          <a class="nav-link" routerLink="/donate-book" routerLinkActive="active-link">Donate Book</a>
          <a class="nav-link" routerLink="/view-books" routerLinkActive="active-link">View Book</a>
       <a class="nav-link" routerLink="/register" routerLinkActive="active-link">register</a>
          <a class="nav-link" routerLink="/login" routerLinkActive="active-link">login</a>
           <a class="nav-link" routerLink="/user-list" routerLinkActive="active-link">user-list</a>
      
      
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .custom-header { background: linear-gradient(to right, #4a6fb3, #1c2f4f); }
    .custom-header .nav-link { color: white; margin: 0 14px; font-weight: 500; font-size: 14px; }
    .custom-header .nav-link:hover { color: #e6efff; }
    .cart-link { font-weight: bold; color: #ffeb3b; }
    .active-link { text-decoration: underline; } /* Highlight active page */
  `]
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe((count: number) => {
      this.cartCount = count;
    });
  }
}
