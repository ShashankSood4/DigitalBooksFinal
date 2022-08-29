import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-books-home',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.css']
})
export class BooksHomeComponent implements OnInit {
  books:Book[]
  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.bookService.getAllBooks()
      .subscribe(books=>{
        this.books=books;
        console.log(this.books);
      },
        err=>console.log(err));
  }

}
