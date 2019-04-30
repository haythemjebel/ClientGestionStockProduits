import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Produit } from './../../shared/produit';
import { ProduitService } from './../../service/produit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
Prods:Produit[];
produitForm:FormGroup;
  constructor(private prodseri:ProduitService,private fb:FormBuilder) { 
    this.produitForm=this.fb.group({
      ref:['',Validators.required],
      quantite:'',
      prixUnitaire:''
    });
  }

  ngOnInit() {
    this.loadProduits();
   }
  loadProduits(){
    this.prodseri.getProduits().subscribe(
      d => {this.Prods = d}
      );
  }

}
