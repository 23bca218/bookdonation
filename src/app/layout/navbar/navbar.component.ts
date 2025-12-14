import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg custom-header">
      <div class="container">
        <div class="navbar-nav mx-auto">
          <a class="nav-link" routerLink="/login">Login</a>
          <a class="nav-link" routerLink="/register">Register</a>
          <a class="nav-link" routerLink="/about">About</a>
          <a class="nav-link" routerLink="/contact">Contact</a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .custom-header {
      background-color: #1E90FF; /* Navbar color */
      color: white;
    }
    .custom-header .nav-link {
      color: white;
      margin: 0 10px;
      font-weight: 500;
    }
    .custom-header .nav-link:hover {
      color: #FFD700;
    }
  `]
})
export class NavbarComponent {}
