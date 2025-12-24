import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `

    <!-- HERO -->
    <section class="hero">
      <h1>📚 Book Donation Platform</h1>
      <p>Connecting book donors and readers to spread knowledge and promote literacy.</p>

      <div class="buttons">
        <button class="btn donate" (click)="goDonate()">📘 Donate a Book</button>
        <button class="btn request" (click)="goRequest()">📗 Request a Book</button>
      </div>
    </section>

    <!-- WHAT YOU DO -->
    <section class="process">
      <h2 class="title">What You Do?</h2>

      <div class="grid">
        <div class="box">
          <span class="icon">📝</span>
          <p>Fill up the book donation form</p>
        </div>

        <div class="box">
          <span class="icon">📦</span>
          <p>Get the books ready and packed</p>
        </div>

        <div class="box">
          <span class="icon">🖨️</span>
          <p>Take printout (Tracking Slip)</p>
        </div>

        <div class="box">
          <span class="icon">🚚</span>
          <p>Handover books to pickup partner</p>
        </div>
      </div>
    </section>

    <!-- WHAT WE DO -->
    <section class="process light">
      <h2 class="title">What We Do?</h2>

      <div class="grid">
        <div class="box">
          <span class="icon">🔍</span>
          <p>Quality check of donated books</p>
        </div>

        <div class="box">
          <span class="icon">💻</span>
          <p>Books listed on the website</p>
        </div>

        <div class="box">
          <span class="icon">📚</span>
          <p>Storing & maintaining book quality</p>
        </div>

        <div class="box">
          <span class="icon">📮</span>
          <p>Shipping books to reader’s doorstep</p>
        </div>
      </div>
    </section>

    <!-- HOW DONATION HELPS -->
    <section class="process">
      <h2 class="title">How Does Donation Help?</h2>

      <div class="grid">
        <div class="box">
          <span class="icon">❤️</span>
          <p>Develop culture of reading & sharing</p>
        </div>

        <div class="box">
          <span class="icon">🔄</span>
          <p>Your old books get a new life</p>
        </div>

        <div class="box">
          <span class="icon">🌍</span>
          <p>Reduces carbon footprint</p>
        </div>

        <div class="box">
          <span class="icon">🎓</span>
          <p>Be the cause of literacy</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <h2>Ready to Make a Difference?</h2>
      <p>Your one book can change someone’s life.</p>
      <button class="cta-btn" (click)="goDonate()">🚀 Get Started</button>
    </section>
  `,

  styles: [`

    /* HERO */
    .hero {
      background: linear-gradient(120deg,#3ec6c1,#f4c76e);
      padding: 70px 20px;
      text-align: center;
      color: white;
      border-radius: 18px;
      margin: 20px;
    }

    .buttons {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }

    .btn {
      padding: 10px 24px;
      border-radius: 25px;
      border: none;
      cursor: pointer;
      font-weight: bold;
      color: white;
    }

    .donate { background: #2ecc71; }
    .request { background: #e67e22; }

    /* PROCESS */
    .process {
      padding: 50px 20px;
      text-align: center;
    }

    .process.light {
      background: #f7f9fc;
    }

    .title {
      background: #245db3;
      color: white;
      display: inline-block;
      padding: 8px 20px;
      border-radius: 20px;
      margin-bottom: 30px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 25px;
      max-width: 1100px;
      margin: auto;
    }

    .box {
      background: white;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.1);
      transition: 0.3s;
    }

    .box:hover {
      transform: translateY(-6px);
    }

    .icon {
      font-size: 48px;
      display: block;
      margin-bottom: 10px;
    }

    .box p {
      font-size: 14px;
      color: #333;
    }

    /* CTA */
    .cta {
      background: linear-gradient(120deg,#667eea,#764ba2);
      color: white;
      text-align: center;
      padding: 60px 20px;
      border-radius: 18px;
      margin: 20px;
    }

    .cta-btn {
      margin-top: 15px;
      padding: 12px 28px;
      border-radius: 25px;
      border: none;
      font-weight: bold;
      cursor: pointer;
      background: white;
      color: #764ba2;
    }

  `]
})
export class HomeComponent {

  constructor(private router: Router) {}

  goDonate() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      this.router.navigate(['/register']);
    } else {
      this.router.navigate(['/donate-book']);
    }
  }

  goRequest() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      this.router.navigate(['/register']);
    } else {
      this.router.navigate(['/view-books']);
    }
  }
}
