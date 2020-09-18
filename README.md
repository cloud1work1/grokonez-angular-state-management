# GrokonezNgrx

- ## Instal npm install @ngrx/store
- ## app.module.ts
  ```
  StoreModule.forRoot({customers: CustomerReducer})
  ```
- ## customer.action.ts
  ```
  export enum CustomerAactionTypes {
    ADD = '[Customer Component] Add',
    DEL = '[Customer Component] Del
  }
  
  export class AddCustomer implements Action {
    readonly type = CustomerActionTypes.Add;
    constructor(public payload: Customer) {}
  }
  
  export class DelCustomer implements Action {
    readonly type = CustomerActionTypes.DEL;
    constructor(public id: number) {}
  }
  
  export type Actions = AddCustomer | DelCustomer;
  ```
- ## customer.reducer.ts
  ```
  const initialState: Customer = {};
  export function CustomerReducer(state: Customer[] = [initialState], action: Actions) {
    switch(action.type) {
    
      case(CustomerActionTypes.ADD): 
      return [...state, action.payload];
      case(CustomerActionTypes.DEL):
       return state.filter(({id})) => id !== action.payload);
      default:
        return state;
    }
  
  }
  ```
 - ## Interface
   ```
   export interface AppState {
    customers: Customer[];
   }
   ```
 - ## Customer List
  ```
  constructor(private store:Store<AppState>) {
   this.customers = store.select('customers');
  }
  ```
 - ## customer list html
  ```
  <div *ngFor="let customer of customers | aync>
  ```
- ## add customer
  ```
  constructor(private store: Store<AppState>) {}
  
  add() {
    this.store.dispatch(new AddCustomer(this.customer);
  }
  ```
- ## del customer
  ```
  constructor(private store: Store<AppState>) {}
  
  add() {
    this.store.dispatch(new DelCustomer(this.customer.id);
  }
  ```
 ## NOTE: the name of key mentioned in **StoreModule.forRoot({key: reducer})**, should be absolutely same in case context as well, while selecting from store, i.e. ** store.select('key')
