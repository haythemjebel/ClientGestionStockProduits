import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpInterceptor } from '@angular/common/http';
@Injectable()
export class XhrInterceptor implements HttpInterceptor{

    constructor(private cookiesevice:CookieService){

    }

    intercept(req:HttpRequest<any>,next:HttpHandler){
        const token = this.cookiesevice.get('token');
        const xhr = req.clone({
            headers :req.headers.set('authorization',`basic ${token}`)
        });
        return next.handle(xhr);
    }
} 