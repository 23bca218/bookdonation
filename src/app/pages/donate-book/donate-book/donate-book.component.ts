import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donate-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">
      <div class="card">

        <h2>📚 Donate a Book</h2>
        <p class="subtitle">Share knowledge, spread happiness</p>

        <form (ngSubmit)="donateBook()">

          <div class="group">
            <label>Book Title</label>
            <input type="text" required />
          </div>

          <div class="group">
            <label>Author</label>
            <input type="text" required />
          </div>

          <div class="group">
          
          </div>

          <div class="group">
            <label>Book Condition</label>
            <select required>
              <option value="">Select condition</option>
              <option>New</option>
              <option>Used - Good</option>
              <option>Used - Average</option>
            </select>
          </div>

          <div class="group">
         
          </div>

         

          <div class="group">
            <label>Contact Number</label>
            <input type="tel" placeholder="10-digit mobile number" required />
          </div>

          <div class="group">
            <label>Book Image (optional)</label>
            <input type="file" />
          </div>

          <button class="btn">Donate Book ❤️</button>
        </form>
      </div>

      <!-- 🎆 CONFETTI -->
      <div class="confetti" *ngIf="showConfetti">
        <span *ngFor="let c of confetti; let i = index"
              [style.left.%]="(i * 7) % 100"
              [style.animationDuration.s]="1.8 + (i % 4) * 0.4">
          {{ emojis[i % emojis.length] }}
        </span>
      </div>
    </div>
  `,
  styles: [`
    .page {
      min-height: 100vh;
      background: linear-gradient(135deg, #e3f2fd, #fce4ec);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .card {
      background: #fff;
      padding: 30px;
      border-radius: 18px;
      width: 380px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.15);
      z-index: 2;
    }

    .subtitle {
      color: #777;
      margin-bottom: 18px;
      text-align: center;
    }

    .group {
      margin-bottom: 14px;
    }

    label {
      font-weight: 600;
      display: block;
      margin-bottom: 6px;
    }

    input, select, textarea {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: 1.5px solid #ccc;
      outline: none;
      font-size: 14px;
    }

    textarea {
      resize: none;
      height: 70px;
    }

    .btn {
      width: 100%;
      padding: 12px;
      border-radius: 25px;
      border: none;
      background: linear-gradient(90deg, #6c63ff, #ff6584);
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      margin-top: 10px;
    }

    /* 🎆 CONFETTI */
    .confetti {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
    }

    .confetti span {
      position: absolute;
      top: -10px;
      font-size: 26px;
      animation: drop linear infinite;
    }

    @keyframes drop {
      from { transform: translateY(0) rotate(0deg); opacity: 1; }
      to   { transform: translateY(110vh) rotate(360deg); opacity: 0; }
    }
  `]
})
export class DonateBookComponent {

  showConfetti = false;

  emojis = ['🎉', '🎊', '✨', '💥', '🎈'];
  confetti = Array(30);

  donateBook() {
    this.showConfetti = true;

    setTimeout(() => {
      this.showConfetti = false;
      alert('Thank you for donating a book 🎉');
    }, 2000);
  }
}
