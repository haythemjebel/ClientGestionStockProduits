import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataModel } from './../../shared/data.model';
import { UserService } from './../../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users:User[];
user:User=new User();
usersModel:DataModel[];
userFrom:FormGroup;
  constructor(private userService:UserService,private fb:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit() {
    this.users= this.route.snapshot.data.Users;
    this.userFrom=this.fb.group({
      username:['',Validators.required]
    });
    this.usersModel=[
      new DataModel('id','ID','number',true,[]),
      new DataModel('username','Nom utilisateur','string',false,[]),
      new DataModel('enable','Active','number',true,[])
    ]
  }
}
