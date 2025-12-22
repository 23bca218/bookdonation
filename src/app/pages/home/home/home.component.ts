import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <!-- HERO SECTION -->
    <section class="hero">
      <h1>📚 Book Donation Platform</h1>
      <p>
        Connecting book donors and readers to spread knowledge and promote literacy.
      </p>

      <div class="buttons">
        <button class="btn donate" (click)="goDonate()">
          📘 Donate a Book
        </button>

        <button class="btn request" (click)="goRequest()">
          📗 Request a Book
        </button>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="why">
      <h2>Why Choose Us?</h2>

      <div class="cards">
        <div class="card">
          <h3>💸 Free to Use</h3>
          <p>Our platform is completely free for everyone.</p>
        </div>

        <div class="card">
          <h3>⚡ Easy to Use</h3>
          <p>Donate and request books in just a few clicks.</p>
        </div>

        <div class="card">
          <h3>📖 Promote Literacy</h3>
          <p>Help spread the joy of reading to those who need it most.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(120deg, #3ec6c1, #f4c76e);
      padding: 60px 20px;
      text-align: center;
      color: white;
      border-radius: 15px;
      margin: 20px;
    }

    .buttons {
      margin-top: 25px;
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }

    .btn {
      padding: 10px 22px;
      border-radius: 20px;
      border: none;
      cursor: pointer;
      color: white;
      font-weight: bold;
      font-size: 14px;
    }

    .donate {
      background: #2ecc71;
    }

    .request {
      background: #e67e22;
    }

    .why {
      padding: 40px 20px;
      text-align: center;
    }

    .cards {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .card {
      width: 230px;
      background: #ffffff;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class HomeComponent {

  constructor(private router: Router) {}

  // ✅ DONATE BUTTON (ROLE BASED)
  goDonate() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('role');

    if (!isLoggedIn) {
      this.router.navigate(['/register']);
      return;
    }

    if (role === 'donor') {
      this.router.navigate(['/view-books']);
    } else {
      this.router.navigate(['/donate-book']);
    }
  }

  // ✅ REQUEST BUTTON (ROLE BASED)
  goRequest() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const role = localStorage.getItem('role');

    if (!isLoggedIn) {
      this.router.navigate(['/register']);
      return;
    }

    if (role === 'donor') {
      this.router.navigate(['/view-books']);
    } else {
      this.router.navigate(['/donate-book']);
    }
  }
}
