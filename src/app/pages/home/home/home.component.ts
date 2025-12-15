import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- HERO -->
    <section class="hero">
      <h1>📚 Book Donation Platform</h1>
      <p>
        Connecting book donors and readers to spread knowledge and promote literacy.
      </p>

      <div class="buttons">
        <a routerLink="/donate" class="btn donate">📘 Donate a Book</a>
        <a routerLink="/request" class="btn request">📗 Request a Book</a>
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
    }

    .btn {
      padding: 10px 22px;
      border-radius: 20px;
      text-decoration: none;
      color: white;
      font-weight: bold;
      font-size: 14px;
    }

    .donate { background: #2ecc71; }
    .request { background: #e67e22; }

    .why {
      padding: 40px 20px;
      text-align: center;
    }

    .cards {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .card {
      width: 230px;
      background: #fff;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 8px 15px rgba(0,0,0,0.1);
    }
  `]
})
export class HomeComponent {}
