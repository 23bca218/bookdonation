import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-donate-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">

      <h2 class="title">📚 Donated Books</h2>

      <!-- SEARCH + FILTER -->
      <div class="filters">
        <input
          type="text"
          placeholder="🔍 Search by title / author / category"
          [(ngModel)]="searchText"
        />

        <select [(ngModel)]="selectedCondition">
          <option value="All">All Conditions</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
          <option value="Old">Old</option>
        </select>
      </div>

      <!-- TABLE -->
      <table *ngIf="filteredBooks.length > 0">
        <thead>
          <tr>
            <th>#</th>
            <th>📸 Image</th>
            <th>📖 Title</th>
            <th>✍ Author</th>
            <th>📦 Condition</th>
            <th>🏷 Category</th>
            <th>💰 Price</th>
            <th>✏️ Edit</th>
            <th>❌ Delete</th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let book of filteredBooks; let i = index">
            <td>{{ i + 1 }}</td>

            <td>
              <img
                [src]="book.image || 'assets/books/default-book.png'"
                class="book-img"
              />
            </td>

            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.condition }}</td>
            <td>{{ book.category || '-' }}</td>
            <td>{{ book.price ? '₹ ' + book.price : '-' }}</td>

            <td>
              <button class="edit-btn" (click)="editBook(book)">
                ✏️ Edit
              </button>
            </td>
            

            <td >
              <button class="del-btn" (click)="deleteBook(book._id)">
                ❌ Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="empty" *ngIf="filteredBooks.length === 0">
        📭 No books found
      </p>

    </div>
  `,
  styles: [`
    .page {
      padding: 30px;
      background: #f4f6fb;
      min-height: 100vh;
    }

    .title {
      text-align: center;
      color: #243b6b;
      margin-bottom: 20px;
    }

    /* FILTERS */
    .filters {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .filters input,
    .filters select {
      padding: 10px 14px;
      border-radius: 8px;
      border: 1.5px solid #ccc;
      font-size: 14px;
      width: 240px;
    }

    /* TABLE */
    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      border-radius: 12px;
      overflow: hidden;
    }

    th, td {
      padding: 12px;
      text-align: center;
      border-bottom: 1px solid #e5e7eb;
    }

    th {
      background: linear-gradient(90deg, #4a73e6, #223a84);
      color: white;
    }

    tr:hover {
      background: #f1f5ff;
    }

    /* IMAGE */
    .book-img {
      width: 50px;
      height: 70px;
      object-fit: cover;
      border-radius: 6px;
    }

    /* BUTTONS */
    .edit-btn {
      background: #f1c40f;
      border: none;
      padding: 6px 10px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
    }

    .edit-btn:hover {
      background: #d4ac0d;
    }

    .del-btn {
      background: #e74c3c;
      color: white;
      border: none;
      padding: 6px 10px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
    }

    .del-btn:hover {
      background: #c0392b;
    }

    .empty {
      text-align: center;
      margin-top: 30px;
      font-size: 16px;
      color: #555;
    }
  `]
})
export class BookDonateViewComponent implements OnInit {

  books: any[] = [];
  searchText: string = '';
  selectedCondition: string = 'All';
  isAdmin: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isAdmin = localStorage.getItem('role') === 'admin';
      this.loadBooks();
    }
  }

  loadBooks() {
    fetch('http://localhost:5000/books')
      .then(res => res.json())
      .then(data => this.books = data)
      .catch(err => console.error(err));
  }

  get filteredBooks() {
    return this.books.filter(book => {
      const matchText =
        book.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(this.searchText.toLowerCase()) ||
        (book.category || '').toLowerCase().includes(this.searchText.toLowerCase());

      const matchCondition =
        this.selectedCondition === 'All' || book.condition === this.selectedCondition;

      return matchText && matchCondition;
    });
  }

  deleteBook(id: string) {
    if (!confirm('Are you sure you want to delete this book?')) return;

    fetch(`http://localhost:5000/books/${id}`, { method: 'DELETE' })
      .then(() => {
        this.books = this.books.filter(b => b._id !== id);
        alert('Book deleted successfully ✅');
      });
  }

  editBook(book: any) {
    alert(`Edit feature coming soon for: ${book.title}`);
    // later: navigate to edit page with book id
  }
}
