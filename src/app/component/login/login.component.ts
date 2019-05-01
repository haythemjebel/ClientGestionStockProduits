import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  credentials={
    username:'',
    password:''
  };
  constructor(private fb:FormBuilder,private servi:AppService,private route:Router) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      username:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      password:['',Validators.compose([Validators.required,Validators.minLength(3)])]
    });
  }
  login(){
    this.servi.authentificate(this.credentials,()=>{
      this.route.navigateByUrl('/home/(contentOutlet:produit)');
    });{

    }
  }

}
