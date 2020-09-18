import { Action } from '@ngrx/store';
import { Customer } from './customer';

export enum CustomerActionTypes {
    ADD = '[Customer Component] Add',
    DEL = '[Customer Component] Delete'
}

export class AddCustomer implements Action {
    readonly type = CustomerActionTypes.ADD;

    constructor(public payload: Customer) {}
}

export class DelCustomer implements Action {
    readonly type = CustomerActionTypes.DEL;

    constructor(public id: number) {}
}

export type Actions =  AddCustomer | DelCustomer;