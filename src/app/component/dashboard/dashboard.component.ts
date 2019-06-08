import { ProduitService } from './../../service/produit.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

private produitData ={
  labels: [],
  datasets: []
};
usersData ={
  labels: [],
  datasets: []
};
  constructor( private ProdService:ProduitService,private userService:UserService) { }

  ngOnInit() {
    const dataset1Quantite={
      label: "Quantité",
      data: [],
      backgroundColor: 'rgb(191,255,0)',
      borderColor:'rgb(255,90,132)'
    };
    const dataset1PrixUnitaire={
      label: "Prix Unitaire",
      data: [],
      backgroundColor:'(165, 153, 131)',
      borderColor:'rgb(255,90,132)'
    };
    this.ProdService.getAll().subscribe(list=>
      list.forEach(produit =>{
        this.produitData.labels.push(produit.ref);
        dataset1Quantite.data.push(produit.quantite);
        dataset1PrixUnitaire.data.push(produit.prixUnitaire);
      })
    );

    this.produitData.datasets.push(dataset1Quantite);
    this.produitData.datasets.push(dataset1PrixUnitaire);

    const dataset2user={
      label: "Roles",
      data: [],
      backgroundColor:'(165, 153, 131)',
      borderColor:'rgb(255,90,132)'
    };
    this.usersData.labels.push('ROLE_ADMIN');
    this.usersData.labels.push('ROLE_USER');

    this.userService.getAll().subscribe(list=>{
      let adminLength= 0;
        list.forEach(user => user.roles.forEach(role =>{ if(role.name == 'ROLE_ADMIN'){
          adminLength ++;
        }}));
      dataset2user.data.push(adminLength);

      let userLength= 0;
      list.forEach(user => user.roles.forEach(role => {if(role.name == 'ROLE_USER'){
        userLength ++;
      }}));
      dataset2user.data.push(userLength);

    });
     this.usersData.datasets.push(dataset2user);
  }
}
