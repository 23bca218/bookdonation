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
      <div class="card">
        <div class="header">
          <h2 class="title">📘 Book Donation</h2>
          <h3>Register</h3>
        </div>

        <form (ngSubmit)="onSubmit()">
          <input type="text" placeholder="Full Name" [(ngModel)]="name" name="name" required />
          <input type="text" placeholder="Username" [(ngModel)]="username" name="username" required />
          <input type="email" placeholder="Email" [(ngModel)]="email" name="email" required />
          <input type="text" placeholder="Phone Number" [(ngModel)]="phone" name="phone" required />
          <input type="text" placeholder="Address" [(ngModel)]="address" name="address" required />
          <input type="password" placeholder="Password" [(ngModel)]="password" name="password" required />
          <input type="password" placeholder="Confirm Password" [(ngModel)]="cpassword" name="cpassword" required />
        <div class="select-group">
  <label>Select Role</label>

  <select [(ngModel)]="role" name="role" class="role-select">
    <option value="" disabled selected>Choose your role</option>
    <option value="donor">Donor</option>
    <option value="customer">Customer</option>
    <option value="admin">Admin</option>
  </select>
</div>


          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .select-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.select-group label {
  font-weight: 600;
  margin-bottom: 6px;
  color: #333;
}

.role-select {
  padding: 12px 14px;
  border-radius: 8px;
  border: 1.5px solid #ccc;
  font-size: 15px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* hover */
.role-select:hover {
  border-color: #6c63ff;
}

/* focus */
.role-select:focus {
  outline: none;
  border-color: #6c63ff;
  box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.2);
}

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

    .title {
      margin-bottom: 5px;
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
  role ='';

  constructor(private router: Router) {}

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
    alert('User stored in MongoDB');
    this.router.navigate(['/login']);
  });
}

}