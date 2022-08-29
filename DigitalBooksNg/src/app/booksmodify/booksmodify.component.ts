import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import{FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-booksmodify',
  templateUrl: './booksmodify.component.html',
  styleUrls: ['./booksmodify.component.css']
})
export class BooksmodifyComponent implements OnInit {
  
  bookForm:FormGroup;
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
  constructor(private router: Router, private route: ActivatedRoute,private formBuilder: FormBuilder,private bookService : BookService, private alert: AlertService) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
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
 updateBookId:number = this.route.snapshot.params['id'];
  getBook(id){
    this.bookService.getBook(id).subscribe(data=>{
      this.bookForm.setValue({
        Logo: data.logo,
        Title: data.title,
        Category: data.category,
        Price: data.price,
        AuthorName:data.authorName,
        Publisher:data.publisher,
        Content:data.content
      });
      console.log(data);
    });
    
  }
  onFormSubmit(form: NgForm){
    this.bookService.updateBook(this.updateBookId,form)
    .subscribe(res=>{
      this.alert.showDialog('Book','Book updated successfully');
      this.router.navigate(['/bookshome']);
    }, (err) => {
      this.alert.showDialog('Book','Error :' +err);
      console.log(err);
    });
  }
}
