import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="page">
      <h2>Contact Us</h2>

      <div class="info-card">
        <strong>📧 Email</strong>
        <p>support&#64;bookdonation.com</p>
      </div>

      <div class="info-card">
        <strong>📞 Phone</strong>
        <p>9876543210</p>
      </div>

      <div class="info-card">
        <strong>🏢 Address</strong>
        <p>123 Book Street, Library City</p>
      </div>
    </div>
  `,
  styles: [`
    .page {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    .info-card {
      background: #f5f5f5;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
    }
    .info-card strong {
      display: block;
      margin-bottom: 5px;
      font-size: 16px;
    }
    .info-card p {
      margin: 0;
      font-size: 14px;
    }
  `]
})
export class ContactComponent {}
