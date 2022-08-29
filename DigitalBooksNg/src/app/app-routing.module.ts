import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { BooksHomeComponent } from './books-home/books-home.component'
import { BookscreateComponent } from './bookscreate/bookscreate.component';
import { BooksmodifyComponent } from './booksmodify/booksmodify.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [
  {
    path:'login',
    component: UserLoginComponent,
    data: { title: 'Signup'}
  },
  { 
    path:'bookshome',
    component:BooksHomeComponent,
    data: {title:'See all books'}
  },
  { 
    path:'booksdetail',
    component:BooksDetailComponent,
    data: {title:'See books by you'}
  },
  { 
    path:'bookscreate',
    component:BookscreateComponent,
    data: {title:'Create new Book - Author'}
  },
  { 
    path:'booksmodify/:id',
    component:BooksmodifyComponent,
    data: {title:'Modify Books - Author'}
  },{ 
    path:'booksearch',
    component:BooksearchComponent,
    data: {title:'Search Books'}
  },{ 
    path:'signin',
    component:SigninComponent,
    data: {title:'SignIn'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
