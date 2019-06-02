import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrincipalState } from '../shared/principal.state';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  Host='http://localhost:8082/Api/user';
  authenticated :boolean =false;

  constructor( private http:HttpClient,
    private cookiesevice:CookieService,
    private store : Store<PrincipalState>) { }

  authentificate(credentials,callback){
    if(credentials){
      const token = btoa(credentials.username +':'+ credentials.password);
      this.cookiesevice.set('token',token);
      this.http.get(this.Host).subscribe(resp=>{
        if(resp && resp['name']){
          console.log(resp)
          this.authenticated=true;
          this.store.dispatch({
            type:'SAVE_PRINCIPAL',
            payload:resp
          });
        }else{
          this.authenticated=false; 
        }
        return callback && callback();
      });
    }else{
      this.authenticated=false;
    }
  }
  logout(callback){
      return callback && callback();
  }

}
