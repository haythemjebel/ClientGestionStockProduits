import { User } from './../component/user/user.model';
import { CrudService } from '../shared/crud.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService implements CrudService {
public host='http://localhost:8082/crud_user'
  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.host);
  }
  add(user):Observable<any>{
    return this.http.post(this.host,user);
  }
  update(user):Observable<any>{
    return this.http.put(this.host,user);
  }
  delete(id):Observable<any>{
    return this.http.delete(this.host+`/${id}`);
  }

  
}
