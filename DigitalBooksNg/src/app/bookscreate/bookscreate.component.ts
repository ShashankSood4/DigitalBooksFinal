import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import{FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-bookscreate',
  templateUrl: './bookscreate.component.html',
  styleUrls: ['./bookscreate.component.css']
})
export class BookscreateComponent implements OnInit {
  bookForm:FormGroup;
  Logo: string='';
  Title: string='';
  Category:string='';
  Price: number;
  AuthorName: string='';
  Publisher: string='';
  PublishedDate: Date = new Date();
  Content: string='';
  Active: boolean;      
  CreatedDate: Date = new Date();
  ModifiedDate: Date = new Date();
  constructor(private router: Router,private formBuilder: FormBuilder,private bookService : BookService, private alert: AlertService) { }

  ngOnInit() {
    this.bookForm= this.formBuilder.group({
      Logo:[null, Validators.required],
      Title:[null, Validators.required],
      Category:[null, Validators.required],
      Price:[null, Validators.required],
      AuthorName:[null, Validators.required],
      Publisher:[null, Validators.required],
      Content:[null, Validators.required],
    });
  }
  onFormSubmit(form: NgForm){
    this.bookService.addBook(form)
    .subscribe(res=>{
      this.alert.showDialog('Book','Book added successfully');
    //  this.router.navigate(['/employees']);
    }, (err)=>{
      this.alert.showDialog('Book','Error :' +err);
      console.log(err);
    });
  }
}
