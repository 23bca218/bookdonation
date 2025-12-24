import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-page">

      <div class="about-wrapper">

        <!-- LEFT CONTENT -->
        <div class="about-info fade-left">
          <h2>About Us</h2>
          <p class="tagline">Who we are & what we believe</p>

          <div class="info-card">
            <span>📚</span>
            <div>
              <strong>Our Purpose</strong>
              <p>
                We aim to make education accessible by connecting book donors
                with learners who need them the most.
              </p>
            </div>
          </div>

          <div class="info-card">
            <span>🎯</span>
            <div>
              <strong>Our Mission</strong>
              <p>
                To promote reading culture and ensure no book goes to waste
                through meaningful donations.
              </p>
            </div>
          </div>

          <div class="info-card">
            <span>🌱</span>
            <div>
              <strong>Our Vision</strong>
              <p>
                A future where knowledge is freely shared and learning
                opportunities are equal for all.
              </p>
            </div>
          </div>

          <p class="quote">📖 Empowering minds. One book at a time.</p>
        </div>

        <!-- RIGHT IMAGE / HIGHLIGHT -->
        <div class="about-visual fade-right">
          <h2>Why Book Donation?</h2>
          <p class="tagline">Because knowledge grows when shared</p>

          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Books"
          />

          <p class="visual-text">
            Millions of books remain unused while many learners lack access
            to basic study materials. Our platform bridges this gap by
            encouraging sharing and community support.
          </p>
        </div>

      </div>

    </div>
  `,
  styles: [`
    /* PAGE */
    .about-page {
      min-height: 100vh;
      background: linear-gradient(180deg, #eef3f9, #f8fbff);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px;
      font-family: 'Segoe UI', sans-serif;
    }

    .about-wrapper {
      width: 100%;
      max-width: 1100px;
      display: flex;
      gap: 40px;
    }

    /* LEFT */
    .about-info {
      flex: 1;
    }

    .about-info h2 {
      font-size: 30px;
      color: #1e3a8a;
    }

    .tagline {
      color: #64748b;
      margin-bottom: 30px;
    }

    .info-card {
      display: flex;
      gap: 15px;
      background: #ffffff;
      padding: 18px;
      border-radius: 14px;
      margin-bottom: 18px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.08);
      transition: transform 0.3s ease;
    }

    .info-card:hover {
      transform: translateY(-5px);
    }

    .info-card span {
      font-size: 24px;
    }

    .info-card strong {
      color: #1e3a8a;
    }

    .info-card p {
      margin: 4px 0 0;
      font-size: 14px;
      color: #475569;
      line-height: 1.6;
    }

    .quote {
      margin-top: 30px;
      color: #475569;
      font-size: 14px;
    }

    /* RIGHT */
    .about-visual {
      flex: 1;
      background: #ffffff;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.12);
      text-align: center;
    }

    .about-visual h2 {
      color: #1e3a8a;
      margin-bottom: 5px;
    }

    .about-visual img {
      width: 100%;
      max-width: 320px;
      border-radius: 16px;
      margin: 25px 0;
      box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    }

    .visual-text {
      font-size: 14px;
      color: #475569;
      line-height: 1.6;
    }

    /* ANIMATIONS */
    .fade-left {
      animation: slideLeft 0.8s ease forwards;
    }

    .fade-right {
      animation: slideRight 0.8s ease forwards;
    }

    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(-40px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideRight {
      from { opacity: 0; transform: translateX(40px); }
      to { opacity: 1; transform: translateX(0); }
    }

    /* MOBILE */
    @media (max-width: 768px) {
      .about-wrapper {
        flex-direction: column;
      }
    }
  `]
})
export class AboutComponent {}
