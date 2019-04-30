import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientGestionStockProduits';
  showhidesidebar :boolean =false ;
  onShowSideBarchange(showhidesidebar){
    this.showhidesidebar=showhidesidebar;
  }
}
