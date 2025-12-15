import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },   // ✅ HOME PAGE
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];
