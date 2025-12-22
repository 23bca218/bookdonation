import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">
      <div class="contact-container">

        <!-- LEFT SIDE -->
        <div class="contact-info">
          <h2>📞 Let’s Connect</h2>
          <p class="info-sub">We are happy to help you 🤝</p>

          <div class="info-card">
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <p>support&#64;bookdonation.com</p>
            </div>
          </div>

          <div class="info-card">
            <span>📱</span>
            <div>
              <strong>Phone</strong>
              <p>9876543210</p>
            </div>
          </div>

          <div class="info-card">
            <span>📍</span>
            <div>
              <strong>Address</strong>
              <p>123 Book Street, Library City</p>
            </div>
          </div>

          <p class="footer-note">📚 Sharing books, spreading knowledge</p>
        </div>

        <!-- RIGHT SIDE : FORM -->
        <div class="contact-form">
          <h2>✉️ Send Us a Message</h2>
          <p class="form-sub">We usually reply within 24 hours ⏰</p>

          <form (ngSubmit)="submitForm()">

            <!-- NAME -->
            <div class="field">
              <input
                type="text"
                [(ngModel)]="name"
                name="name"
                required
                placeholder=" "
              />
              <label>👤 Your Name</label>
            </div>

            <!-- EMAIL -->
            <div class="field">
              <input
                type="email"
                [(ngModel)]="email"
                name="email"
                required
                placeholder=" "
              />
              <label>📧 Your Email</label>
            </div>

            <!-- SUBJECT DROPDOWN -->
            <div class="field">
              <select
                [(ngModel)]="subject"
                name="subject"
                required
              >
                <option value="" disabled selected hidden></option>
                <option value="donation">📚 Book Donation</option>
                <option value="support">🛠️ Technical Support</option>
                <option value="account">👤 Account Issue</option>
                <option value="feedback">💡 Feedback</option>
                <option value="other">❓ Other</option>
              </select>
              <label>📝 Subject</label>
            </div>

            <!-- MESSAGE -->
            <div class="field">
              <textarea
                rows="5"
                [(ngModel)]="message"
                name="message"
                required
                placeholder=" "
              ></textarea>
              <label>💬 Your Message</label>
            </div>

            <button type="submit">🚀 Send Message</button>
          </form>
        </div>

      </div>
    </div>
  `,
  styles: [`
    /* PAGE */
    .page {
      min-height: 100vh;
      background: linear-gradient(120deg, #eef2ff, #f9f9ff);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
      font-family: 'Segoe UI', sans-serif;
    }

    .contact-container {
      background: #fff;
      display: flex;
      max-width: 950px;
      width: 100%;
      border-radius: 18px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0,0,0,0.12);
    }

    /* LEFT */
    .contact-info {
      width: 45%;
      background: linear-gradient(135deg, #7c3aed, #2563eb);
      color: #fff;
      padding: 35px;
    }

    .info-sub {
      font-size: 14px;
      opacity: 0.9;
      margin-bottom: 25px;
    }

    .info-card {
      display: flex;
      gap: 14px;
      background: rgba(255,255,255,0.18);
      padding: 15px;
      border-radius: 12px;
      margin-bottom: 14px;
      align-items: center;
    }

    .footer-note {
      margin-top: 25px;
      font-size: 13px;
      opacity: 0.9;
    }

    /* RIGHT */
    .contact-form {
      width: 55%;
      padding: 35px;
      background: #ffffff;
    }

    .contact-form h2 {
      margin-bottom: 4px;
      font-size: 22px;
      color: #4c1d95;
    }

    .form-sub {
      font-size: 13px;
      color: #64748b;
      margin-bottom: 20px;
    }

    /* FLOATING LABEL */
    .field {
      position: relative;
      margin-bottom: 22px;
    }

    .field input,
    .field textarea,
    .field select {
      width: 100%;
      padding: 15px 14px;
      border-radius: 12px;
      border: 1.8px solid #d1d5db;
      font-size: 14px;
      background: #ffffff;
      color: #111827;
      transition: 0.3s ease;
      appearance: none;
    }

    .field label {
      position: absolute;
      top: 50%;
      left: 14px;
      transform: translateY(-50%);
      font-size: 14px;
      color: #6b7280;
      background: #ffffff;
      padding: 0 6px;
      pointer-events: none;
      transition: 0.3s ease;
    }

    .field input:focus + label,
    .field input:not(:placeholder-shown) + label,
    .field textarea:focus + label,
    .field textarea:not(:placeholder-shown) + label,
    .field select:focus + label,
    .field select:not([value=""]) + label {
      top: -9px;
      font-size: 12px;
      color: #7c3aed;
    }

    .field input:focus,
    .field textarea:focus,
    .field select:focus {
      border-color: #7c3aed;
      box-shadow: 0 0 0 4px rgba(124,58,237,0.25);
      outline: none;
    }

    /* BUTTON */
    button {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #7c3aed, #2563eb);
      color: #ffffff;
      border: none;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 25px rgba(99,102,241,0.4);
    }

    /* MOBILE */
    @media (max-width: 768px) {
      .contact-container {
        flex-direction: column;
      }

      .contact-info,
      .contact-form {
        width: 100%;
      }
    }
  `]
})
export class ContactComponent {

  name = '';
  email = '';
  subject = '';
  message = '';

  submitForm() {
    alert('🎉 Message sent successfully!');
    console.log(this.name, this.email, this.subject, this.message);

    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}
