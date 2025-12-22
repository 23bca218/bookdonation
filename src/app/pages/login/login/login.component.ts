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

          <button class="login-btn" type="submit">
            Login
          </button>

          <button type="button" class="google-btn">
            Continue with Google
          </button>

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
    }
  `]
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router) {}

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

    // ✅ SAVE ROLE (optional but useful)
    localStorage.setItem('role', data.user.role);

    alert('Login successful');

    // ✅ ROLE BASED REDIRECT
    if (data.user.role === 'admin') {
      this.router.navigate(['/user-list']);
    } 
    else if (data.user.role === 'donor') {
      this.router.navigate(['/donate-book']);
    } 
    else {
      this.router.navigate(['/view-books']);
    }
  })
  .catch(() => {
    alert('Server error');
  });
}
          



}
