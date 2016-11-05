import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CustomerComponent }  from './customer/customer.component';
import { CustComponent }  from './customer/cust/cust.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, CustomerComponent, CustComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
