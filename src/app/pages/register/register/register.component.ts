import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="register-container d-flex justify-content-center align-items-center">
      <form (ngSubmit)="onSubmit()" #registerForm="ngForm" class="p-4 shadow rounded bg-light">
        <h2 class="text-center mb-4">Register</h2>

        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" placeholder="Enter name" name="name" [(ngModel)]="name" required>
          <div *ngIf="registerForm.submitted && !name" class="text-danger">Name is required.</div>
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" placeholder="Enter email" name="email" [(ngModel)]="email" required email>
          <div *ngIf="registerForm.submitted && !email" class="text-danger">Email is required.</div>
        </div>

        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" placeholder="Enter password" name="password" [(ngModel)]="password" required>
          <div *ngIf="registerForm.submitted && !password" class="text-danger">Password is required.</div>
        </div>

        <button class="btn btn-success w-100" type="submit">Register</button>
      </form>
    </div>
  `,
  styles: [`
    .register-container { height: 80vh; }
  `]
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  onSubmit() {
    if (!this.name || !this.email || !this.password) {
      alert("Please fill in all fields!");
      return;
    }
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("Password:", this.password);
    alert("Registration successful!");
  }
}
