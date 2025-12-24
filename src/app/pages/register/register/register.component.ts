import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">

      <div class="register-wrapper">

        <!-- LEFT PANEL -->
        <div class="left-panel">
          <div class="logo">
            📚 <span>BookDonate</span><b>.com</b>
          </div>

          <h2>Join BookDonate</h2>
          <p>
            Become a part of our reading & sharing community.<br />
            Register to start donating or requesting books.
          </p>

          <div class="illustration">
            📦📘🤝
          </div>
        </div>

        <!-- RIGHT PANEL -->
        <div class="right-panel">

          <form (ngSubmit)="onSubmit()">

            <input type="text" placeholder="Full Name"
              [(ngModel)]="name" name="name" required />

            <input type="text" placeholder="Username"
              [(ngModel)]="username" name="username" required />

            <input type="email" placeholder="Email"
              [(ngModel)]="email" name="email" required />

            <input type="text" placeholder="Phone Number"
              [(ngModel)]="phone" name="phone" required />

            <input type="text" placeholder="Address"
              [(ngModel)]="address" name="address" required />

            <input type="password" placeholder="Password"
              [(ngModel)]="password" name="password" required />

            <input type="password" placeholder="Confirm Password"
              [(ngModel)]="cpassword" name="cpassword" required />

            <!-- ROLE -->
            <select [(ngModel)]="role" name="role" required>
              <option value="" disabled selected>Select Role</option>
              <option value="donor">Donor</option>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>

            <button class="register-btn" type="submit">
              Register
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

    .register-wrapper {
      width: 900px;
      height: 520px;
      background: white;
      display: flex;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      overflow: hidden;
    }

    /* LEFT PANEL */
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

    /* RIGHT PANEL */
    .right-panel {
      width: 60%;
      padding: 30px 40px;
      position: relative;
      overflow-y: auto;
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

    input, select {
      width: 100%;
      padding: 12px;
      margin-bottom: 14px;
      border: none;
      border-bottom: 1.8px solid #ccc;
      outline: none;
      font-size: 14px;
      background: transparent;
    }

    input:focus, select:focus {
      border-bottom-color: #2f66d0;
    }

    select {
      cursor: pointer;
    }

    .register-btn {
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

    /* MOBILE */
    @media (max-width: 768px) {
      .register-wrapper {
        flex-direction: column;
        height: auto;
      }

      .left-panel, .right-panel {
        width: 100%;
      }
    }
  `]
})
export class RegisterComponent {

  name = '';
  username = '';
  email = '';
  phone = '';
  address = '';
  password = '';
  cpassword = '';
  role = '';

  constructor(public router: Router) {}

  onSubmit() {
    if (this.password !== this.cpassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      name: this.name,
      username: this.username,
      email: this.email,
      phone: this.phone,
      address: this.address,
      password: this.password,
      role: this.role
    };

    fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(() => {
      alert('Registration successful');
      this.router.navigate(['/login']);
    })
    .catch(() => alert('Server error'));
  }
}
