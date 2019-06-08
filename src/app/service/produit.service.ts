import { CrudService } from './../shared/crud.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProduitService implements CrudService {
public host='http://localhost:8082/Api/Produit'
  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.host);
  }
  add(produit):Observable<any>{
    return this.http.post(this.host,produit);
  }
  update(produit):Observable<any>{
    return this.http.put(this.host,produit);
  }
  delete(id):Observable<any>{
    return this.http.delete(this.host+`/${id}`);
  }
  addAll(list):Observable<any>{
    return this.http.post(this.host +'/all',list);
  }

  
}
