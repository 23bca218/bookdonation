import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">


      <!-- Content Card -->
      <div class="content-card">

        <h2>About Our Book Donation Platform 📚</h2>

        <p>
          Welcome to our Book Donation Platform! Our mission is to promote literacy
          and education by making books accessible to everyone. Whether you want
          to donate books or request books, we make the process simple and smooth.
        </p>

        <p>
          We believe that sharing knowledge can change lives. Our platform connects
          donors and readers to help build a growing community and inspire a love
          for reading.
        </p>

        <!-- Mission & Vision -->
        <div class="info-boxes">
          <div class="box blue">
            <h3>📘 Our Mission</h3>
            <p>
              To build a supportive network that encourages sharing knowledge
              and provides access to educational resources.
            </p>
          </div>

          <div class="box sky">
            <h3>🌍 Our Vision</h3>
            <p>
              To create a world where everyone has access to books they need
              to learn, grow, and thrive.
            </p>
          </div>
        </div>

        <!-- Green Section -->
        <div class="action-box">
          <h3>Ready to Make a Difference?</h3>
          <p>
            Your contribution can change someone's life. Donate a book or
            request one today!
          </p>

          <button class="btn donate">Donate a Book</button>
          <button class="btn request">Request a Book</button>
        </div>

      </div>

     
    </div>
  `,
  styles: [`
    .page {
      background: #f4f6fa;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    /* Navbar */
    .navbar {
      background: linear-gradient(to right, #4b63a8, #2d3f8f);
      color: white;
      padding: 10px 20px;
      display: flex;
      justify-content: center;
      gap: 25px;
      font-size: 14px;
    }

    .navbar span {
      cursor: pointer;
    }

    .navbar .active {
      font-weight: bold;
      text-decoration: underline;
    }

    /* Content */
    .content-card {
      background: white;
      max-width: 800px;
      margin: 30px auto;
      padding: 25px;
      border-radius: 6px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.15);
      text-align: center;
    }

    .content-card h2 {
      color: #2d3f8f;
      margin-bottom: 15px;
    }

    .content-card p {
      color: #444;
      font-size: 14px;
      margin-bottom: 10px;
    }

    /* Info boxes */
    .info-boxes {
      display: flex;
      gap: 15px;
      margin-top: 20px;
    }

    .box {
      flex: 1;
      padding: 15px;
      border-radius: 5px;
      color: white;
    }

    .box h3 {
      margin-bottom: 8px;
      font-size: 16px;
    }

    .blue {
      background: #2f80ed;
    }

    .sky {
      background: #56ccf2;
    }

    /* Action section */
    .action-box {
      background: #27ae60;
      color: white;
      padding: 20px;
      border-radius: 6px;
      margin-top: 25px;
    }

    .action-box h3 {
      margin-bottom: 8px;
    }

    .btn {
      margin: 8px 5px 0;
      padding: 7px 15px;
      border: none;
      border-radius: 4px;
      font-size: 13px;
      cursor: pointer;
    }

    .donate {
      background: white;
      color: #27ae60;
      font-weight: bold;
    }

    .request {
      background: #e0f7ea;
      color: #27ae60;
      font-weight: bold;
    }

    /* Footer */
    .footer {
      background: #d1d1d1;
      text-align: center;
      padding: 8px;
      font-size: 12px;
      margin-top: 40px;
    }
  `]
})
export class AboutComponent {}
