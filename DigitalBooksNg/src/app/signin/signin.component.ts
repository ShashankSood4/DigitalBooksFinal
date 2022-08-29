import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../models/credentials';
import { UserService } from '../services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  cred:Credentials={
    UserName:"",
    UserPass:""
  }

  isAuthenticated:boolean=false;
  currentUserName:string='';
  currentUserId:string='';
  currentUserType:string='';

  token : any={
    token:'',
    isAuthenticated:false,
    UserType:''
  }


  constructor(private userservice:UserService, private router:Router) { }

  jwthelper = new JwtHelperService();

  ngOnInit(): void {
  }
  resp: any;

  onSubmit(){

    if(this.cred.UserName!='' && this.cred.UserPass!='')
    {
      this.userservice.Validate(this.cred)
      .subscribe(
        response=>
        {
          debugger;
          this.token=response;
          const decodedToken=this.jwthelper.decodeToken(this.token.token);
          console.log("this is decoded token"+decodedToken);
          this.isAuthenticated=this.token.isAuthenticated;
          this.currentUserName=decodedToken.UserName;
          this.currentUserType=decodedToken.Usertype;
          console.log(this.currentUserType);
          localStorage.setItem("token",this.token.token);
          localStorage.setItem("currentUserName",this.currentUserName);
          localStorage.setItem("currentUserType",this.currentUserType);
          localStorage.setItem("isAutheticated",this.isAuthenticated?"true":"false");
          console.log(localStorage.getItem("token"));
          if(this.currentUserType==="Author")
          {
            this.router.navigate(['/booksdetail']);
          }
          else{
            this.router.navigate(['/bookshome']);
          }

        },
        error=>{
          console.log("error");
        }
      )
    }
  }
}