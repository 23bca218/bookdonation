import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { ViewBooksComponent } from './pages/view-books/view-books.component';
import { UserListComponent } from './pages/user-list/user-list.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

      // ✅ DONATE BOOK (ONLY THIS WAY)
      {
        path: 'donate-book',
        loadComponent: () =>
          import('./pages/donate-book/donate-book/donate-book.component')
            .then(m => m.DonateBookComponent)
      },
      {
  path: 'book-donate-view',
  loadComponent: () =>
    import('./pages/book-donate-view/book-donate-view.component')
      .then(m => m.BookDonateViewComponent)
},


      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'view-books', component: ViewBooksComponent },
      { path: 'user-list', component: UserListComponent }
    ]
  }
];
