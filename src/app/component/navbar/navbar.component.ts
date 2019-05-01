import { Router } from '@angular/router';
import { AppService } from './../../service/app.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Input()
showsidebar:boolean=false;
@Output()
showSideBarChange:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor(private servi:AppService,private route:Router) { }

  ngOnInit() {
  }
  showhide(){
    this.showsidebar =! this.showsidebar;
    this.showSideBarChange.emit(this.showsidebar);
  }
  logout(){
    this.servi.logout(()=>{
      this.route.navigateByUrl('/login');
    });
  }

}
