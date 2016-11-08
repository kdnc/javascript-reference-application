import { Component, OnInit } from '@angular/core';

import { ContactsService } from './contacts.service';
import { Contact } from './contact.model';

@Component({
    selector: 'contacts-list',
    template: `
    <h2>Contacts</h2>
    <ul>
      <li *ngFor="let contact of contacts">
        <a [routerLink]="['/contact',  contact.id ]">{{contact.name}}</a>
      </li>
    </ul>
    `
})
export class ContactsListComponent implements OnInit { 

    private contacts: Contact[];

    constructor(private contactsService: ContactsService){
    }

    ngOnInit() {
        this.contacts = this.contactsService.getContacts();
    }
}
