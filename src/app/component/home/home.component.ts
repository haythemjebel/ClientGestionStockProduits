import { Router } from '@angular/router';
import { AppService } from './../../service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showhidesidebar :boolean =false ;
  constructor(private appservice:AppService,private route:Router) { }

  ngOnInit() {
  }
  onShowSideBarchange(showhidesidebar){
    this.showhidesidebar=showhidesidebar;
  }
}
