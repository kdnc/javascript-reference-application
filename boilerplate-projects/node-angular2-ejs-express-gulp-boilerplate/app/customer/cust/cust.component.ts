import { Component } from '@angular/core';

@Component({
    selector: 'my-cust',
    template: '<h1>Test cust</h1>'
})
export class CustComponent { 
    public test = "adad";
    constructor(){
        console.log("testdfdfd");
    }
}
