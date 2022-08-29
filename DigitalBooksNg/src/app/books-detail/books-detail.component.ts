import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import{FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  bookForm: FormGroup;
  fetchedBook:Book;
  books:Book[]
  Id: number;
  Logo: string='';
    Title: string='';
    Category:string='';
    Price: number;
    AuthorName: string='';
    Publisher: string='';
    PublishedDate: Date;
    Content: string='';
    Active: boolean;      
    CreatedDate: Date;
    ModifiedDate: Date;
  constructor(private router: Router,private formBuilder: FormBuilder,private bookService : BookService, private alert: AlertService) { }

  ngOnInit(): void {
    this.bookService.getAllBooksbyAuthor()
      .subscribe(books=>{
        this.books=books;
        console.log(this.books);
      },
        err=>console.log(err));
  }

 
  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe(_=>{
      this.alert.showDialog('Book','Book deleted successfully');},
      err =>{this.alert.showDialog('Bo','Error :' +err);
      console.log(err)});
    }
}
