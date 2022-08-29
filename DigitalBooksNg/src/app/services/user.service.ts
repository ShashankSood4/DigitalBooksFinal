import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { User } from '../models/user';
import { Credentials } from '../models/credentials';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://localhost:7075/api/Authentication'
  private httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };
  constructor(private http: HttpClient) { }

 

  //Add Card
  addUser(user):Observable<User> {
    const url ='https://localhost:7163/CreateUser'
    return this.http.post<User>(url, user, this.httpOptions);
  }
  token="";
  Validate(cred:Credentials):Observable<Credentials[]>{
  return this.http.post<Credentials[]>(this.baseUrl,cred)
  }
/* validateUser(cred):Observable<Credentials>{


} */
}
