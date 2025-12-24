import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">

      <div class="login-wrapper">

        <!-- LEFT PANEL -->
        <div class="left-panel">
          <div class="logo">
            📚 <span>BookDonate</span><b>.com</b>
          </div>

          <h2>Welcome To BookDonate</h2>
          <p>
            Share knowledge. Spread education.<br />
            Login to continue your journey.
          </p>

          <div class="illustration">
            🛵📦📘
          </div>
        </div>

        <!-- RIGHT PANEL -->
        <div class="right-panel">

          <button class="close-btn" (click)="router.navigate(['/'])">✖</button>

          <h3>Enter your login details</h3>

          <form (ngSubmit)="onSubmit()" #f="ngForm">

            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              [(ngModel)]="email"
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              [(ngModel)]="password"
              required
            />

            <button class="login-btn" type="submit">
              Proceed
            </button>

           

          </form>

        </div>

      </div>

    </div>
  `,
  styles: [`
    .page {
      height: 100vh;
      background: #f2f6fb;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .login-wrapper {
      width: 820px;
      height: 420px;
      background: white;
      display: flex;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      overflow: hidden;
    }

    /* LEFT */
    .left-panel {
      width: 40%;
      background: linear-gradient(to bottom, #1c4fa1, #4f83d1);
      color: white;
      padding: 30px;
      text-align: center;
    }

    .logo {
      background: white;
      color: #1c4fa1;
      display: inline-block;
      padding: 6px 16px;
      border-radius: 20px;
      font-weight: bold;
      margin-bottom: 25px;
    }

    .logo b {
      color: #ff5722;
    }

    .left-panel h2 {
      margin-bottom: 10px;
    }

    .left-panel p {
      font-size: 14px;
      line-height: 1.5;
    }

    .illustration {
      font-size: 60px;
      margin-top: 30px;
    }

    /* RIGHT */
    .right-panel {
      width: 60%;
      padding: 40px;
      position: relative;
    }

    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      border: none;
      background: none;
      font-size: 18px;
      cursor: pointer;
    }

    .right-panel h3 {
      margin-bottom: 20px;
      color: #333;
    }

    input {
      width: 100%;
      padding: 12px;
      margin-bottom: 15px;
      border: none;
      border-bottom: 1.8px solid #ccc;
      outline: none;
      font-size: 14px;
    }

    .login-btn {
      width: 100%;
      padding: 12px;
      background: #2f66d0;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 10px;
    }

    .forgot {
      text-align: center;
      font-size: 13px;
      margin-top: 12px;
      color: #2f66d0;
      cursor: pointer;
    }

    /* MOBILE */
    @media (max-width: 768px) {
      .login-wrapper {
        flex-direction: column;
        height: auto;
      }

      .left-panel, .right-panel {
        width: 100%;
      }
    }
  `]
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(public router: Router) {}

  onSubmit() {
    fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.email,
        password: this.password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (!data.success) {
        alert(data.message);
        return;
      }

      localStorage.setItem('role', data.user.role);
      alert('Login successful');

      if (data.user.role === 'admin') {
        this.router.navigate(['/user-list']);
      } else if (data.user.role === 'donor') {
        this.router.navigate(['/donate-book']);
      } else {
        this.router.navigate(['/view-books']);
      }
    })
    .catch(() => alert('Server error'));
  }
}
