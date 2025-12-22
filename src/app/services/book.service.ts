import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:5000/books';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
