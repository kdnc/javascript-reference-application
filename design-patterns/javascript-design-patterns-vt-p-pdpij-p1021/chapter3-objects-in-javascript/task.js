// Create object method 1 - using object literal syntax
var task = {};
// Create object method 2 - using Object.create method
var task = Object.create(Object.prototype);
// Create object method 2 - using new keyword
var task = new Object();

var task = {
    title: 'My Title',
    description: 'My Description'
};

// Make toString method non writable
Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});
// Following line is ignored since toString property is defined with non writable setting
task.toString = "hi";
console.log(task.toString());
// toString will not be printed since it is defined with non enumerable setting
console.log(Object.keys(task));

// Following commented lines will give an error because toString is defined with non configurable setting
// Object.defineProperty(task, 'toString', {
//     writable: true,
//     enumerable: true,
//     configurable: true
// });

// Inheritance
var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(urgentTask.toString());