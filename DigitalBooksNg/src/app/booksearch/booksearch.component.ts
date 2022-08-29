import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {
  txtSearch:string;
  books:Book;
  selectedRadioButtonValue:any;

  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private router:Router,
    ) { }

  ngOnInit() {
    
  }
  Search()
  {
    if(this.selectedRadioButtonValue=='Author')
    {
    this.bookService.getBookByAuthorName(this.txtSearch).subscribe(booksList=>this.books=booksList,err=>console.log(err));
    }
   else if(this.selectedRadioButtonValue=='Category')
    {
    this.bookService.getBookByCategory(this.txtSearch).subscribe(booksList=>this.books=booksList,err=>console.log(err));
    }
    else if(this.selectedRadioButtonValue=='Price')
    {
    this.bookService.getBookByPrice(this.txtSearch).subscribe(booksList=>this.books=booksList,err=>console.log(err));
    }

  }

}
