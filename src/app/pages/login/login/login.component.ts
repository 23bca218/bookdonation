import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">
      <div class="login-card">

        <h2 class="title">
          📘 Book Donation Login
        </h2>

        <form (ngSubmit)="onSubmit()" #f="ngForm">

          <input
            type="text"
            placeholder="Username or Email"
            name="email"
            [(ngModel)]="email"
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            [(ngModel)]="password"
            required
          />

          <div class="options">
            <label>
              <input type="checkbox" [(ngModel)]="remember" name="remember" />
              Remember Me
            </label>
          </div>

          <button class="login-btn" type="submit">
            Login
          </button>

          <button type="button" class="google-btn">
            Continue with Google
          </button>

          <p class="register-text">
            Don’t have an account?
            <a href="#">Register</a>
          </p>

        </form>
      </div>
    </div>
  `,
  styles: [`
    .page {
      height: 100vh;
      background: #f4f9ff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .login-card {
      width: 360px;
      background: #f0f8ff;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      text-align: center;
    }

    .title {
      margin-bottom: 20px;
      font-weight: bold;
      color: #1e3a5f;
    }

    input {
      width: 100%;
      padding: 12px;
      margin-bottom: 15px;
      border-radius: 10px;
      border: 1.8px solid #8ec5ff;
      outline: none;
      background: white;
    }

    input::placeholder {
      color: #7a9cc6;
    }

    .options {
      display: flex;
      justify-content: flex-end;
      font-size: 14px;
      margin-bottom: 15px;
      color: #1e3a5f;
    }

    .login-btn {
      width: 100%;
      padding: 12px;
      border-radius: 25px;
      border: none;
      background: #3b9ae1;
      color: white;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 12px;
      cursor: pointer;
    }

    .google-btn {
      width: 100%;
      padding: 12px;
      border-radius: 25px;
      border: none;
      background: #e74c3c;
      color: white;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
      margin-bottom: 15px;
    }

    .register-text {
      font-size: 14px;
      color: #333;
    }

    .register-text a {
      color: #3b9ae1;
      text-decoration: none;
      font-weight: bold;
    }
  `]
})
export class LoginComponent {

  email = '';
  password = '';
  remember = false;

  onSubmit() {
    if (!this.email || !this.password) {
      alert("Please fill all fields");
      return;
    }
    alert("Login Successful");
  }
}
