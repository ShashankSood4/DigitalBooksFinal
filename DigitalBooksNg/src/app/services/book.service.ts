import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Book } from '../models/book';
import { from, throwError } from 'rxjs';
import { catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
    baseUrl = 'https://localhost:7156/';
    private httpOptions={
        headers: new HttpHeaders({'Content-Type':'application/json'})
      };
      constructor(private http: HttpClient) { }
      private handleError<T>(operation= 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        };
      }
      getAllBooks(): Observable<Book[]>{
        return this.http.get<Book[]>(this.baseUrl+"GetAll")
        .pipe(map((data: Book[]) => {
            return data;

          }), catchError( error => {
            return throwError( 'Something went wrong!' );
          })
          )
      }
      getAllBooksbyAuthor(): Observable<Book[]>{
        return this.http.get<Book[]>(this.baseUrl+"GetByAuthor")
        .pipe(map((data: Book[]) => {
            return data;

          }), catchError( error => {
            return throwError( 'Something went wrong!' );
          })
          )
      }
      addBook(book):Observable<Book> {
        const url ='https://localhost:7156/Create'
        return this.http.post<Book>(url, book, this.httpOptions);
      }

      
      getBook(id: number): Observable<Book>{
        const url= `${this.baseUrl}GetById/${id}`;
        return this.http.get<Book>(url
          ).pipe(
          tap(_=> console.log(`fetched book id=${id}`)),
          catchError(this.handleError<any>(`getBook id=${id}`))
        );
      }
      deleteBook(id): Observable<Book>{
        const url= `${this.baseUrl}Books/${id}`;
        console.log(url);
        return this.http.delete<Book>(url).pipe(
          tap(_=> console.log(`deleted employee title=${id}`)),
          catchError(this.handleError<Book>('deleteBook'))
        );
      }
      updateBook(id, book): Observable<any>{
        const url= `${this.baseUrl}Books/${id}`;
        return this.http.put(url, book, this.httpOptions).pipe(
          tap(_=> console.log(`update book id=${id}`)),
          catchError(this.handleError<any>('updateBook'))
        );
      }
      getBookByAuthorName(Name:string):Observable<Book | undefined>{
        const url=`${this.baseUrl}Books/searchbyname/${Name}`;
         return this.http.get<Book>(url).pipe(
           tap(_ => console.log(`fetched Book Name=${Name}`)),
           catchError(this.handleError<Book>(`getBook name=${Name}`))
         );
       }
       getBookByCategory(Category:string):Observable<Book | undefined>{
        const url=`${this.baseUrl}Books/searchbycategory/${Category}`;
         return this.http.get<Book>(url).pipe(
           tap(_ => console.log(`fetched Book Category=${Category}`)),
           catchError(this.handleError<Book>(`getBook Category=${Category}`))
         );
       }
       getBookByPrice(Price:string):Observable<Book | undefined>{
        const url=`${this.baseUrl}Books/searchbyprice/${Price}`;
         return this.http.get<Book>(url).pipe(
           tap(_ => console.log(`fetched Book Price=${Price}`)),
           catchError(this.handleError<Book>(`getBook Price=${Price}`))
         );
       }
  }

