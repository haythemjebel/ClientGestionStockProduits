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
  constructor() { }

  ngOnInit() {
  }
  showhide(){
    this.showsidebar =! this.showsidebar;
    this.showSideBarChange.emit(this.showsidebar);
  }

}
