import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitMockService {
  private PROD:Produit[]=[]

  constructor() { 
    let p1:Produit= new Produit('livre',50,20)  ;
    let p2:Produit= new Produit('cahier',200,5.25)  ;
    let p3:Produit= new Produit('stylo',500,2.10)  ;
    this.PROD.push(p1);
    this.PROD.push(p2);
    this.PROD.push(p3);
  }
  public getProduits():Produit[]{
    return  this.PROD;
  }
}
