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
         <a class="nav-link" routerLink="/register">register</a>
          <a class="nav-link" routerLink="/about">About</a>
          <a class="nav-link" routerLink="/contact">Contact</a>
          
          <a class="nav-link" routerLink="/login">Login</a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .custom-header {
      background: linear-gradient(to right, #4a6fb3, #1c2f4f);
    }

    .custom-header .nav-link {
      color: white;
      margin: 0 14px;
      font-weight: 500;
      font-size: 14px;
    }

    .custom-header .nav-link:hover {
      color: #e6efff;
    }
  `]
})
export class NavbarComponent {}
