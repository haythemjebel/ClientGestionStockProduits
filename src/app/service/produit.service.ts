import { Produit } from './../shared/produit';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
public host='http://localhost:8082/Api/Produit'
  constructor(private http:HttpClient) { }

  getProduits():Observable<any>{
    return this.http.get(this.host);
  }
  addProduit(produit :Produit):Observable<any>{
    return this.http.post(this.host,produit);
  }
  updateProduit(produit :Produit):Observable<any>{
    return this.http.put(this.host,produit);
  }
  deleteProduit(id :number):Observable<any>{
    return this.http.delete(this.host+`/${id}`);
  }

  
}
