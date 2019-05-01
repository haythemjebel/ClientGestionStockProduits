import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
authenticated :boolean =false;
  constructor() { }
  authentificate(credentials,callback){
    if(credentials && credentials.username == 'user' && credentials.password == 'password1'){
      this.authenticated=true;
    }else{
      this.authenticated=false;
    }
    return callback && callback();
  }

}
