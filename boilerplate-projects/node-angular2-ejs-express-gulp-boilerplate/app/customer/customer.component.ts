import { Component } from '@angular/core';

@Component({
    selector: 'my-customer',
    template: '<my-cust></my-cust>'
})
export class CustomerComponent { 
    public test = "adad";
    constructor(){
        console.log("test");
    }
}
