import { ActivatedRoute } from '@angular/router';
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
operation:string ='add';
selectedProduit:Produit;
  constructor(private prodseri:ProduitService,private fb:FormBuilder,private route:ActivatedRoute) { 
    this.createFrom();
  }

  ngOnInit() {
    this.initProduit();
    this.Prods= this.route.snapshot.data.Produits;
    //this.loadProduits();
   }
   createFrom(){
    this.produitForm=this.fb.group({
      ref:['',Validators.required],
      quantite:'',
      prixUnitaire:''
    });
   }
  loadProduits(){
    this.prodseri.getProduits().subscribe(
      d => {this.Prods = d}
      );
  }
  addProduit(){
    const p =this.produitForm.value;
    this.prodseri.addProduit(p).subscribe(
      res=>{
        this.initProduit();
        this.loadProduits();
      }
    );
  }
  updateProduit(){
    this.prodseri.updateProduit(this.selectedProduit).subscribe(
      res=>{
        this.initProduit();
        this.loadProduits();
      }
    );
  }
  initProduit(){
    this.selectedProduit= new Produit();
    this.createFrom();
  }
  deleteProduit(){
    this.prodseri.deleteProduit(this.selectedProduit.ref).subscribe(
      res=>{
        this.selectedProduit=new Produit();
        this.loadProduits();
      }
    )
  }

}
