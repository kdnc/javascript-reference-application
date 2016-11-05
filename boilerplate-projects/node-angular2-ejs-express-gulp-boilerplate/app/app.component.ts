import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<my-customer></my-customer>'
})
export class AppComponent { 
    public test = "adad";
    constructor(){
        console.log("testddfddf");
    }
}
