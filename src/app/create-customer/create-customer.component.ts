import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Customer } from '../customer';
import { AddCustomer } from '../customer.action';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = {id: 0, name: '', age: 0, active: false};
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addCustomer() {
    console.log('addCustomer: ', this.customer);
    this.store.dispatch(new AddCustomer(this.customer));
    this.customer = new Customer();
  }

}
