import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="custom-footer text-center p-3">
      &copy; 2025 My Website. All Rights Reserved.
    </footer>
  `,
  styles: [`
    .custom-footer {
      background-color: #333333;
      color: #ffff;
    }
  `]
})
export class FooterComponent {}
