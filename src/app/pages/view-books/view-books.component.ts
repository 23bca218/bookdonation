import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent {

  searchText: string = '';
  selectedCondition: string = 'All';

  selectedBookIndex: number = -1;
  showModal: boolean = false;

  cartCount$: Observable<number>;

  // 🌟 Book of the Month
  bookOfTheMonthIndex: number = 0;

  books = [
    { title: 'Clean Code', author: 'Robert C. Martin', condition: 'New', image: 'assets/books/clean-code.jpeg', description: 'A guide to writing clean, maintainable code.', testimonials: ['Must-read for developers!', 'Changed the way I code.'] },
    { title: 'The Alchemist', author: 'Paulo Coelho', condition: 'Used', image: 'assets/books/alchemist.jpeg', description: 'A journey of self-discovery and dreams.', testimonials: ['Truly inspiring!', 'Beautiful story.'] },
    { title: 'Java Programming', author: 'Herbert Schildt', condition: 'Old', image: 'assets/books/java.jpeg', description: 'Comprehensive guide to Java programming.', testimonials: ['Very detailed.', 'Good for beginners.'] },
    { title: 'Python Crash Course', author: 'Eric Matthes', condition: 'New', image: 'assets/books/Python Crash Course.jpeg', description: 'Hands-on introduction to Python.', testimonials: ['Easy to understand.', 'Great exercises.'] },
    { title: 'You Can Win', author: 'Shiv Khera', condition: 'Used', image: 'assets/books/you-can-win.jpeg', description: 'Motivational book for success.', testimonials: ['Life-changing!', 'Very practical tips.'] },
    { title: 'Think and Grow Rich', author: 'Napoleon Hill', condition: 'Old', image: 'assets/books/think-grow-rich.png', description: 'Classic book on wealth and mindset.', testimonials: ['Timeless advice.', 'Highly recommended.'] },
    { title: 'Head First Java', author: 'Kathy Sierra', condition: 'Used', image: 'assets/books/head-first-java.jpeg', description: 'Fun and visual Java guide.', testimonials: ['Best for beginners!', 'Very engaging.'] },
    { title: 'Wings of Fire', author: 'A. P. J. Abdul Kalam', condition: 'New', image: 'assets/books/wings-of-fire.jpeg', description: 'Autobiography of Dr. A.P.J. Abdul Kalam.', testimonials: ['Inspirational!', 'Must-read biography.'] },
    { title: 'Atomic Habits', author: 'James Clear', condition: 'New', image: 'assets/books/atomic-habits.jpeg', description: 'Small habits, remarkable results.', testimonials: ['Very practical.', 'Helps build discipline.'] },
    { title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki', condition: 'Used', image: 'assets/books/rich-dad-poor-dad.jpeg', description: 'Financial education and investing tips.', testimonials: ['Eye-opening!', 'Great money advice.'] },
    { title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', condition: 'New', image: 'assets/books/7-habits.jpeg', description: 'Principles for personal and professional effectiveness.', testimonials: ['Life-changing!', 'Highly recommended.'] },
    { title: 'The Power of Now', author: 'Eckhart Tolle', condition: 'Old', image: 'assets/books/power-of-now.jpeg', description: 'A guide to spiritual enlightenment and mindfulness.', testimonials: ['Deeply insightful.', 'Helps focus on the present.'] },
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', condition: 'New', image: 'assets/books/pragmatic-programmer.jpeg', description: 'Tips for software craftsmanship.', testimonials: ['Very practical!', 'Great coding guidance.'] },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', condition: 'Used', image: 'assets/books/the-hobbit.jpeg', description: 'Fantasy adventure story.', testimonials: ['Magical read!', 'Timeless classic.'] },
    { title: '1984', author: 'George Orwell', condition: 'Old', image: 'assets/books/1984.jpeg', description: 'Dystopian social science fiction novel.', testimonials: ['Very thought-provoking.', 'A must-read.'] },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', condition: 'Used', image: 'assets/books/to-kill-a-mockingbird.jpeg', description: 'Classic novel on racial injustice.', testimonials: ['Powerful story.', 'Emotional and moving.'] },
    { title: 'Deep Work', author: 'Cal Newport', condition: 'New', image: 'assets/books/deep-work.jpeg', description: 'Rules for focused success.', testimonials: ['Helps productivity.', 'Great strategies for focus.'] },
    { title: 'Sapiens', author: 'Yuval Noah Harari', condition: 'New', image: 'assets/books/sapiens.jpeg', description: 'A brief history of humankind.', testimonials: ['Fascinating!', 'Very informative.'] },
    { title: 'The Lean Startup', author: 'Eric Ries', condition: 'Used', image: 'assets/books/lean-startup.jpeg', description: 'Entrepreneurship and innovation guide.', testimonials: ['Practical for startups.', 'Loved the methodology.'] },
    { title: 'The Intelligent Investor', author: 'Benjamin Graham', condition: 'Old', image: 'assets/books/intelligent-investor.jpeg', description: 'Investment philosophy and advice.', testimonials: ['Excellent investment guide.', 'Timeless principles.'] },
    { title: 'Meditations', author: 'Marcus Aurelius', condition: 'Old', image: 'assets/books/meditations.jpeg', description: 'Stoic philosophy reflections.', testimonials: ['Very inspiring.', 'Thought-provoking.'] },
    { title: 'The Four Agreements', author: 'Don Miguel Ruiz', condition: 'New', image: 'assets/books/four-agreements.jpeg', description: 'Practical guide to personal freedom.', testimonials: ['Life-changing!', 'Simple yet powerful.'] },
    { title: 'How to Win Friends & Influence People', author: 'Dale Carnegie', condition: 'Used', image: 'assets/books/win-friends.webp', description: 'Communication and people skills guide.', testimonials: ['Very effective!', 'Classic advice.'] },
    { title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', condition: 'New', image: 'assets/books/subtle-art.jpeg', description: 'Self-help book on prioritizing life.', testimonials: ['Funny and insightful.', 'Practical tips.'] },
    { title: 'Algorithms', author: 'Robert Sedgewick', condition: 'New', image: 'assets/books/algorithms.jpeg', description: 'Foundations of algorithms and data structures.', testimonials: ['Comprehensive!', 'Great reference book.'] },
    { title: 'Design Patterns', author: 'Erich Gamma', condition: 'Used', image: 'assets/books/design-patterns.jpeg', description: 'Elements of reusable object-oriented software.', testimonials: ['Must-have for developers.', 'Very detailed.'] },
    { title: 'Cracking the Coding Interview', author: 'Gayle Laakmann McDowell', condition: 'Old', image: 'assets/books/cracking-coding-interview.jpeg', description: 'Coding interview preparation guide.', testimonials: ['Extremely helpful!', 'Good practice questions.'] },
    { title: 'The Art of Computer Programming', author: 'Donald Knuth', condition: 'Old', image: 'assets/books/taocp.jpeg', description: 'Classic computer science series.', testimonials: ['Very technical.', 'Must-read for serious programmers.'] },
    { title: 'Effective Java', author: 'Joshua Bloch', condition: 'New', image: 'assets/books/effective-java.jpeg', description: 'Best practices for Java programming.', testimonials: ['Excellent coding tips.', 'Highly recommended.'] }
 ];

  constructor(private cartService: CartService) {
    this.cartCount$ = this.cartService.cartCount$;
    this.bookOfTheMonthIndex = Math.floor(Math.random() * this.books.length);
  }

  get filteredBooks() {
    return this.books.filter(book => {
      const matchText =
        book.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(this.searchText.toLowerCase());

      const matchCondition =
        this.selectedCondition === 'All' || book.condition === this.selectedCondition;

      return matchText && matchCondition;
    });
  }

  setFilter(condition: string) {
    this.selectedCondition = condition;
  }

  addToCart(book: any) {
    this.cartService.addToCart(book);
    alert(`${book.title} added to cart 🛒`);
  }

  openBookDetails(index: number) {
    this.selectedBookIndex = index;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedBookIndex = -1;
  }

  prevBook() {
    if (this.selectedBookIndex > 0) {
      this.selectedBookIndex--;
    }
  }

  nextBook() {
    if (this.selectedBookIndex < this.filteredBooks.length - 1) {
      this.selectedBookIndex++;
    }
  }

  get selectedBook() {
    return this.selectedBookIndex >= 0
      ? this.filteredBooks[this.selectedBookIndex]
      : null;
  }
}
