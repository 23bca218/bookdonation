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
      background: linear-gradient(to right, #4b6cb7, #182848);
      color: #ffffff;
      font-size: 14px;
      position: fixed;
      bottom: 0;
      width: 100%;
      box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
    }
  `]
})
export class FooterComponent {}
