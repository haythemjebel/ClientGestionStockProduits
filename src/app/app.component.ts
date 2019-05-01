import { Component, OnInit } from '@angular/core';
import { AppService } from './service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ClientGestionStockProduits';
  showhidesidebar :boolean =false ;
  constructor(private appservice:AppService,private route:Router){
  }
  ngOnInit(){
    if(!this.appservice.authenticated){
      this.route.navigateByUrl('/login');
    }else{
      this.route.navigateByUrl('/home');
    }
  }
  onShowSideBarchange(showhidesidebar){
    this.showhidesidebar=showhidesidebar;
  }
}
