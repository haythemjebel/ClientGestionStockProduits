import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProduitService } from 'src/app/service/produit.service';

@Injectable()
export class ProduitResolver implements Resolve<any>{

    constructor(private Prodservi:ProduitService){

    }
    resolve(){
        return this.Prodservi.getAll();
    }
}