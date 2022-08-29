import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule} from '@angular/common/http';
import { BooksHomeComponent } from './books-home/books-home.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './signin/signin.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { AlertComponent } from './alert/alert.component';
import { BookscreateComponent } from './bookscreate/bookscreate.component';
import { BooksmodifyComponent } from './booksmodify/booksmodify.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { PurchasebookComponent } from './purchasebook/purchasebook.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    BooksHomeComponent,
    SigninComponent,
    BooksDetailComponent,
    AlertComponent,
    BookscreateComponent,
    BooksmodifyComponent,
    BooksearchComponent,
    PurchasebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AlertComponent]
})
export class AppModule { }
