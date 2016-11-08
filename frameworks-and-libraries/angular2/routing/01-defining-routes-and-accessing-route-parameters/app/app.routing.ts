import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContactsListComponent} from './contacts/contacts-list.component';
import {ContactsDetailComponent} from './contacts/contacts-detail.component';

/* 
CODE BLOCK EXPLANATION - 1
The path property on our first Route definition is empty. This simply tells the router that 
this component should be loaded into the view by default. The second route has a placeholder 
in its path called `id`. This allows us to have some dynamic value in our path which can later 
be accessed in the component we route to.
*/

const appRoutes: Routes = [
    {
        path:'',
        component:ContactsListComponent
    },
    {
        path:'contact/:id',
        component:ContactsDetailComponent
    }
];

/* 
CODE BLOCK EXPLANATION - 2
To make these routes available to our application, we configure it with our routes 
using `RouterModule.forRoot()`
*/
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);