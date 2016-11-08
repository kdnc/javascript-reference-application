import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactsService } from './contacts.service';
import { Contact } from './contact.model';

@Component({
    selector: 'contacts-detail',
    template: `
        <h2>Contact Details</h2>
        <ul>
            <li>Name - {{contact.name}}</li>
        </ul>
    `
})
export class ContactsDetailComponent implements OnInit { 

    private contact:Contact;

    /* 
    CODE BLOCK EXPLANATION - 5
    An `ActivatedRoute` is an object that contains information about route parameters, 
    query parameters and URL fragments.

    `ActivatedRoute` comes with a params property which is an `Observable`. To access the contact id, 
    all we have to do is to subscribe to the parameters `Observable` changes.
    */
    constructor(private contactsService: ContactsService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.contact = this.contactsService
                .getContact(id);
            });
        /* 
        CODE BLOCK EXPLANATION - 6
            Sometimes we’re not interested in future changes of a route parameter. All we need is 
            this contact id and once we have it, we can provide the data we want to provide. In this .
            case, an Observable can bit a bit of an overkill, which is why the router supports 
            snapshots. A snapshot is simply a snapshot representation of the activated route. 
            We can access the id parameter of the route using snapshots like this:
        */      
        // this.contact = this.contactsService.getContact(this.route.snapshot.params['id']);
        
    }
}
