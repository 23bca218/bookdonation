import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-page">

      <div class="contact-wrapper">

        <!-- LEFT SIDE -->
        <div class="contact-info fade-left">
          <h2>Let’s Connect</h2>
          <p class="tagline">We’d love to hear from you</p>

          <div class="info-card">
            <span>📧</span>
            <div>
              <strong>Email</strong>
             <p>support&#64;bookdonation.com</p>

            </div>
          </div>

          <div class="info-card">
            <span>📞</span>
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

          <!-- MAP -->
          <div class="map-box">
            <iframe
              src="https://www.google.com/maps?q=Library%20City&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <p class="quote">📚 Sharing books. Changing lives.</p>
        </div>

        <!-- RIGHT SIDE FORM -->
        <div class="contact-form fade-right">
          <h2>Send Message</h2>
          <p class="tagline">We usually reply within 24 hours</p>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />

            <select>
              <option disabled selected>Select Subject</option>
              <option>Book Donation</option>
              <option>Account Support</option>
              <option>Technical Issue</option>
              <option>Feedback</option>
              <option>Other</option>
            </select>

            <textarea rows="5" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

    </div>
  `,
  styles: [`
    /* PAGE */
    .contact-page {
      min-height: 100vh;
      background: linear-gradient(180deg, #eef3f9, #f8fbff);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px;
      font-family: 'Segoe UI', sans-serif;
    }

    .contact-wrapper {
      width: 100%;
      max-width: 1100px;
      display: flex;
      gap: 40px;
    }

    /* LEFT */
    .contact-info {
      flex: 1;
    }

    .contact-info h2 {
      font-size: 30px;
      color: #1e3a8a;
    }

    .tagline {
      color: #64748b;
      margin-bottom: 30px;
    }

    .info-card {
      display: flex;
      align-items: center;
      gap: 15px;
      background: #ffffff;
      padding: 18px;
      border-radius: 14px;
      margin-bottom: 18px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.08);
      transition: transform 0.3s ease;
    }

    .info-card:hover {
      transform: translateY(-5px);
    }

    .info-card span {
      font-size: 24px;
    }

    .info-card strong {
      color: #1e3a8a;
    }

    .info-card p {
      margin: 4px 0 0;
      font-size: 14px;
      color: #475569;
    }

    /* MAP */
    .map-box {
      margin-top: 25px;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 15px 30px rgba(0,0,0,0.12);
    }

    .map-box iframe {
      width: 100%;
      height: 220px;
      border: none;
    }

    .quote {
      margin-top: 25px;
      color: #475569;
      font-size: 14px;
    }

    /* RIGHT FORM */
    .contact-form {
      flex: 1;
      background: #ffffff;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.12);
    }

    .contact-form h2 {
      color: #1e3a8a;
      margin-bottom: 5px;
    }

    form input,
    form select,
    form textarea {
      width: 100%;
      padding: 14px 16px;
      margin-bottom: 18px;
      border-radius: 12px;
      border: 1.5px solid #cbd5f5;
      background: #f8fafc;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    form input:focus,
    form select:focus,
    form textarea:focus {
      outline: none;
      border-color: #2563eb;
      background: #ffffff;
      box-shadow: 0 0 0 4px rgba(37,99,235,0.2);
    }

    button {
      width: 100%;
      padding: 14px;
      border-radius: 14px;
      border: none;
      background: linear-gradient(135deg, #1e3a8a, #2563eb);
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 30px rgba(37,99,235,0.5);
    }

    /* ANIMATIONS */
    .fade-left {
      animation: slideLeft 0.8s ease forwards;
    }

    .fade-right {
      animation: slideRight 0.8s ease forwards;
    }

    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(-40px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideRight {
      from { opacity: 0; transform: translateX(40px); }
      to { opacity: 1; transform: translateX(0); }
    }

    /* MOBILE */
    @media (max-width: 768px) {
      .contact-wrapper {
        flex-direction: column;
      }
    }
  `]
})
export class ContactComponent {}
