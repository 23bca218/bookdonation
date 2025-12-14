import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
 imports: [FormsModule,CommonModule],

  template: `
    <div class="login-container d-flex justify-content-center align-items-center">
      <form (ngSubmit)="onSubmit()" #loginForm="ngForm" class="p-4 shadow rounded bg-light">
        <h2 class="text-center mb-4">Login</h2>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" placeholder="Enter email" name="email" [(ngModel)]="email" required>
          <div *ngIf="loginForm.submitted && !email" class="text-danger">Email is required.</div>
        </div>

        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" placeholder="Enter password" name="password" [(ngModel)]="password" required>
          <div *ngIf="loginForm.submitted && !password" class="text-danger">Password is required.</div>
        </div>

        <button class="btn btn-primary w-100" type="submit">Login</button>
      </form>
    </div>
  `,
  styles: [`
    .login-container { height: 80vh; }
  `]
})
export class LoginComponent {
  email = '';
  password = '';

  onSubmit() {
    if (!this.email || !this.password) {
      alert("Please fill in all fields!");
      return;
    }
    console.log("Email:", this.email);
    console.log("Password:", this.password);
    alert("Login successful!");
  }
}
