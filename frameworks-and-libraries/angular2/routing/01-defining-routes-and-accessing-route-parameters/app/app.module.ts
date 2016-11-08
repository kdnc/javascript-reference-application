import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';

import { AppComponent }  from './app.component';
import {ContactsListComponent} from './contacts/contacts-list.component';
import {ContactsDetailComponent} from './contacts/contacts-detail.component';

import {routing} from './app.routing';

@NgModule({
  imports: [ BrowserModule, 
              routing ],
  declarations: [ AppComponent, 
                  ContactsListComponent, 
                  ContactsDetailComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
