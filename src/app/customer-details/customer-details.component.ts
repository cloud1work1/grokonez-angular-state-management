import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { DelCustomer } from '../customer.action';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: Customer;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  delCustomer() {
    this.store.dispatch(new DelCustomer(this.customer.id));
  }

}
