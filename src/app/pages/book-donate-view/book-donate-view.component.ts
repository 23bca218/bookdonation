import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-book-donate-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <h2>📚 Donated Books</h2>

      <table *ngIf="books.length > 0">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Condition</th>
          <th>Category</th>
          <th>Price</th>
         <th>image</th>
        </tr>

        <tr *ngFor="let book of books; let i = index">
          <td>{{ i + 1 }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.condition }}</td>
          <td>{{ book.category || '-' }}</td>
          <td>{{ book.price ? '₹ ' + book.price : '-' }}</td>
          
        </tr>
      </table>

      <p *ngIf="books.length === 0">No donated books found 📭</p>
    </div>
  `,
  styles: [`
    .page { padding: 30px; }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th, td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }

    th {
      background: #4a73e6;
      color: white;
    }
  `]
})
export class BookDonateViewComponent {

  books: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // ✅ EXACT SAME STYLE AS USER LIST
    if (isPlatformBrowser(this.platformId)) {
      fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => this.books = data)
        .catch(err => console.log('Error fetching books', err));
    }
  }
}
