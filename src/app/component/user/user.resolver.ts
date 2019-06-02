import { UserService } from './../../service/user.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class UserResolver implements Resolve<any>{

    constructor(private Userservi:UserService){

    }
    resolve(){
        return this.Userservi.getAll();
    }
}