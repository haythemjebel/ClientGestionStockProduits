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
  constructor(private prodseri:ProduitMockService) { }

  ngOnInit() {
    this.Prods=this.prodseri.getProduits();
  }

}
