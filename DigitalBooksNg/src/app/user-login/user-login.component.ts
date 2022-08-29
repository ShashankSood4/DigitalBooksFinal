import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import{FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userForm: FormGroup;
  UserName :string='';
    Email :string='';
    UserPass:string='';
    UserRole:string='';
  user:User ={
    UserName:'',
    Email:'',
    UserPass:'',
    UserRole:''
  };
  UserID :number;
  constructor(private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private alert: AlertService) { }

  ngOnInit() {
    this.userForm= this.formBuilder.group({
      UserName:[null, Validators.required],
      Email:[null, Validators.required],
      UserPass:[null, Validators.required],
      UserRole:['Select Role', Validators.required],
    });
  }
  // onFormSubmit(){
  //   this.userService.addUser(this.user).subscribe();
  //   console.log(Response);
  // }
  onFormSubmit(form: NgForm){
    this.userService.addUser(form)
    .subscribe(res=>{
      this.alert.showDialog('User','User added successfully');
    //  this.router.navigate(['/employees']);
    }, (err)=>{
      this.alert.showDialog('User','Error :' +err);
      console.log(err);
    });
  }
}
