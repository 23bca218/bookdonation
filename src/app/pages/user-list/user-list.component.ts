import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <h2>👥 Registered Users</h2>

      <table *ngIf="users.length > 0">
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Role</th>
        </tr>

        <tr *ngFor="let user of users">
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </table>

      <p *ngIf="users.length === 0">No users found</p>
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
export class UserListComponent {

  users: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // ✅ Fetch users from MongoDB API
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => this.users = data)
      .catch(err => console.log('Error fetching users', err));
  }
}
