import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{title}}</a>
  <ul class='nav nav-pills'>
  <li><a class='nav-link' routerLinkActive='active' [routerLink]="['']">Home</a></li>
  <li><a class='nav-link' [routerLink]="['/login']">Signup</a></li>
  <li><a class='nav-link' [routerLink]="['/bookshome']">See all books</a></li>
  <li><a class='nav-link' [routerLink]="['/booksdetail']">View & Modify books</a></li>
  </ul>
  </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigitalBooks';
}
