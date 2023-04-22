import { Component } from '@angular/core';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css'],
  styles: [
    `
      h2 {
        font-size: 28px;
        font-weight: bold;
        color: red;
        background-color: green;
      }
    `,
  ],
})
export class HeaderComponent {}
