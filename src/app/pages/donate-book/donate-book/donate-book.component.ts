import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donate-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">
      <div class="card">

        <h2>📚 Donate a Book</h2>
        <p class="subtitle">Share knowledge, spread happiness</p>

        <form (ngSubmit)="donateBook()" #f="ngForm">

          <div class="group">
            <label>Book Title</label>
            <input type="text" name="title" [(ngModel)]="book.title" required />
          </div>

          <div class="group">
            <label>Author</label>
            <input type="text" name="author" [(ngModel)]="book.author" required />
          </div>

          <div class="group">
            <label>Description</label>
            <textarea name="description"
                      [(ngModel)]="book.description"
                      placeholder="Brief description"></textarea>
          </div>

          <div class="group">
            <label>Category</label>
            <select name="category" [(ngModel)]="book.category" required>
              <option value="">Select category</option>
              <option>Programming</option>
              <option>Fiction</option>
              <option>Self Help</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>

          <div class="group">
            <label>Condition</label>
            <select name="condition" [(ngModel)]="book.condition" required>
              <option value="">Select condition</option>
              <option>New</option>
              <option>Used</option>
            </select>
          </div>

          <div class="group">
            <label>Price (₹)</label>
            <input type="number" name="price" [(ngModel)]="book.price" />
          </div>

          <div class="group">
            <label>Book Image (optional)</label>
            <input type="text"
                   name="photo"
                   [(ngModel)]="book.photo"
                   placeholder="image filename or URL" />
          </div>

          <button class="btn" [disabled]="f.invalid">
            Donate Book ❤️
          </button>
        </form>

      </div>
    </div>
  `,
  styles: [`
    .page {
      min-height: 100vh;
      background: linear-gradient(135deg, #e3f2fd, #fce4ec);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card {
      background: #fff;
      padding: 30px;
      border-radius: 18px;
      width: 400px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    }

    .subtitle {
      color: #777;
      margin-bottom: 18px;
      text-align: center;
    }

    .group {
      margin-bottom: 14px;
    }

    label {
      font-weight: 600;
      display: block;
      margin-bottom: 6px;
    }

    input, select, textarea {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: 1.5px solid #ccc;
      font-size: 14px;
    }

    textarea {
      resize: none;
      height: 70px;
    }

    .btn {
      width: 100%;
      padding: 12px;
      border-radius: 25px;
      border: none;
      background: linear-gradient(90deg, #6c63ff, #ff6584);
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      margin-top: 10px;
    }
  `]
})
export class DonateBookComponent {

  // ✅ MATCHES MongoDB SCHEMA
  book = {
    title: '',
    author: '',
    description: '',
    price: null as number | null,
    category: '',
    condition: '',
    photo: ''
  };

  donateBook() {
    fetch('http://localhost:5000/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.book)
    })
    .then(res => res.json())
    .then(() => {
      alert('✅ Book donated successfully!');
      this.book = {
        title: '',
        author: '',
        description: '',
        price: null,
        category: '',
        condition: '',
        photo: ''
      };
    })
    .catch(err => {
      console.error(err);
      alert('❌ Error donating book');
    });
  }
}
