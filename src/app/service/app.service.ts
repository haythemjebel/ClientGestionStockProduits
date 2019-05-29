import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  Host='http://localhost:8082/Api/user';
  authenticated :boolean =false;
  constructor( private http:HttpClient,private cookiesevice:CookieService) { }
  authentificate(credentials,callback){
    if(credentials){
      const token = btoa(credentials.username +':'+ credentials.password);
      this.cookiesevice.set('token',token);
      this.http.get(this.Host).subscribe(resp=>{
        if(resp && resp['name']){
          this.authenticated=true;
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
