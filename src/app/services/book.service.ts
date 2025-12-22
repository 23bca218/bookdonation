import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Optional: Book interface
export interface Book {
  title: string;
  author: string;
  condition: string;
  image: File | null;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:5000/api/books';

  constructor(private http: HttpClient) {}

  // Add book (with FormData for file)
  addBook(book: FormData | any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, book);
  }

  // Get all books
  getBooks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
