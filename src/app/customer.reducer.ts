import { Customer } from "./customer";
import { Actions, CustomerActionTypes } from './customer.action';

const initialState: Customer = {
    id: 1,
    name: 'Andrien',
    age: 27,
    active: true
};

export function CustomerReducer(state: Customer[] = [initialState], action: Actions) {
    switch (action.type) {
        case CustomerActionTypes.ADD:
            console.log('Add action invoked: ', action.payload);
            return [...state, action.payload];
        case CustomerActionTypes.DEL:
            return state.filter(({id}) => id !== action.id);
        default:
            console.log('Fetched state: ', state);
            return state;
    }
}