import { Principal } from './principal.model';
import { Action } from '@ngrx/store';

export const SAVE_PRINCIPAL ='SAVE_PRINCIPAL';

export class SavePrincipalAction implements Action{
    readonly type =SAVE_PRINCIPAL;
    constructor(public payload :Principal){

    }
}