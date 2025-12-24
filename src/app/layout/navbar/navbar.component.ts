import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="custom-header">
      <div class="nav-container">

        <!-- LEFT LOGO -->
        <div class="logo-pill" (click)="goHome()">
          📚 <span class="name">BookDonate</span><span class="dot">.com</span>
        </div>

        <!-- CENTER MENU -->
      <div class="nav-menu">
  <a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">
    🏠 Home
  </a>

  <a routerLink="/about" routerLinkActive="active-link">
    📘 About
  </a>

  <a routerLink="/contact" routerLinkActive="active-link">
    📞 Contact
  </a>

  <a routerLink="/donate-book" routerLinkActive="active-link">
    🎁📚 Donate
  </a>

  <a routerLink="/view-books" routerLinkActive="active-link">
    📚 Browse
  </a>

  <a routerLink="/book-donate-view" routerLinkActive="active-link">
    🗂 Donated
  </a>
</div>

        <!-- RIGHT SEARCH -->
        <div class="search-box">
          <span class="search-icon">📚</span>
          <input
            type="text"
            placeholder="Search by title, author or ISBN"
          />
          <button (click)="goToSearch()">🔍</button>
        </div>

      </div>
    </nav>
  `,
  styles: [`
    /* NAVBAR */
    .custom-header {
      background: linear-gradient(to right, #4a6fb3, #1c2f4f);
      padding: 10px 20px;
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    /* LOGO */
    .logo-pill {
      background: white;
      padding: 6px 16px;
      border-radius: 25px;
      font-weight: bold;
      font-size: 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
    }

    .logo-pill .name {
      color: #1c2f4f;
    }

    .logo-pill .dot {
      color: #ff5722;
    }

    /* MENU */
    .nav-menu a {
      color: white;
      margin: 0 12px;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
    }

    .nav-menu a:hover {
      color: #e6efff;
    }

    .active-link {
      text-decoration: underline;
    }

    /* SEARCH */
    .search-box {
      display: flex;
      align-items: center;
      background: white;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
    }

    .search-icon {
      position: absolute;
      left: 8px;
      font-size: 14px;
      color: #666;
    }

    .search-box input {
      border: none;
      outline: none;
      padding: 6px 10px 6px 32px;
      font-size: 13px;
      width: 220px;
    }

    .search-box button {
      background: #ff7a2f;
      border: none;
      color: white;
      padding: 6px 12px;
      cursor: pointer;
      font-size: 14px;
    }

    .search-box button:hover {
      background: #e8681f;
    }

    /* MOBILE */
    @media (max-width: 992px) {
      .nav-container {
        flex-direction: column;
        align-items: stretch;
      }

      .nav-menu {
        text-align: center;
      }

      .search-box {
        width: 100%;
      }

      .search-box input {
        width: 100%;
      }

      .logo-pill {
        justify-content: center;
      }
    }
  `]
})
export class NavbarComponent {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  goToSearch() {
    this.router.navigate(['/view-books']);
  }
}
