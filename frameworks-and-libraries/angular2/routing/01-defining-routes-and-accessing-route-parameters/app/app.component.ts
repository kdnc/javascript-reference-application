import { Component } from '@angular/core';

import { ContactsService } from './contacts/contacts.service';

/* 
CODE BLOCK EXPLANATION - 3
In order to tell Angular where to load the component we route to, 
we need to use a directive called `<router-outlet>`.
*/

/* 
CODE BLOCK EXPLANATION - 4
* There are different ways to route to other components and routes.
We can use a directive called routerLink for that. `RouterLink` takes 
care of generating an href attribute for us that the browser needs 
to make linking to other sites work.

* `RouterLink` supports not only strings, but also expressions! As soon 
as we want to use expressions to generate our links, we have to use 
an array literal syntax in `RouterLink`.

* `RouterLink` expression takes an array where the first field is the segment 
that describes the path we want to route to and the second a dynamic 
value which ends up as route parameter
*/
@Component({
    selector: 'my-app',
    template: `
        <h1>Contacts App</h1>
        <ul>
            <li><a [routerLink]="['/']">Contact List</a></li>
        </ul>
        <router-outlet></router-outlet>
    `,
    providers: [ContactsService]
})
export class AppComponent { 
    constructor(){
    }
}
