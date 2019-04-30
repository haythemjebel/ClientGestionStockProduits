import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Produit } from './../../shared/produit';
import { ProduitMockService } from './../../service/produit-mock-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
Prods:Produit[];
produitForm:FormGroup;
  constructor(private prodseri:ProduitMockService,private fb:FormBuilder) { 
    this.produitForm=this.fb.group({
      ref:['',Validators.required],
      quantite:'',
      prixUnitaire:''
    });
  }

  ngOnInit() {
    this.Prods=this.prodseri.getProduits();
  }

}
