import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">
      <div class="card">
        <div class="header">
         <h2 class="title">
          📘 Book Donation 
        </h2>
          <h2>Register</h2>
        </div>

        <form (ngSubmit)="onSubmit()">
          <input type="text" placeholder="Full Name" [(ngModel)]="name" name="name" />
          <input type="text" placeholder="Username" [(ngModel)]="username" name="username" />
          <input type="email" placeholder="Email" [(ngModel)]="email" name="email" />
          <input type="text" placeholder="Phone Number" [(ngModel)]="phone" name="phone" />
          <input type="text" placeholder="Address" [(ngModel)]="address" name="address" />
          <input type="password" placeholder="Password" [(ngModel)]="password" name="password" />
          <input type="password" placeholder="Confirm Password" [(ngModel)]="cpassword" name="cpassword" />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .page {
      height: 100vh;
      background: #f4f6fb;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card {
      width: 360px;
      background: #ffffff;
      padding: 28px 24px 26px;
      border-radius: 16px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.12);
    }

    .header {
      text-align: center;
      margin-bottom: 18px;
    }

    .icons {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-bottom: 6px;
    }

    .icons span {
      font-size: 30px;
      color: #4a73e6;
    }

    .header h2 {
      margin: 6px 0 0;
      font-size: 22px;
      font-weight: 700;
      color: #243b6b;
    }

    form input {
      width: 100%;
      height: 40px;
      margin-bottom: 12px;
      padding: 0 14px;
      border-radius: 10px;
      border: 2px solid #7bbcff;
      font-size: 14px;
      outline: none;
    }

    form input::placeholder {
      color: #6c8fb3;
    }

    form input:focus {
      border-color: #3f6de0;
    }

    button {
      margin-top: 14px;
      width: 100%;
      height: 44px;
      border-radius: 30px;
      border: none;
      background: linear-gradient(90deg, #4a73e6, #223a84);
      color: #ffffff;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 8px 18px rgba(63,109,224,0.45);
    }

    button:hover {
      opacity: 0.95;
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

  onSubmit() {
    alert('Registered Successfully');
  }
}
