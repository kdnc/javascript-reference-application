// Module pattern - Wrap it in a function, call it and return the methods you want to expose to world
// Usually module pattern is used when you need one of something, like a DBService
var repo = function () {

    // db is private, since it is not returned
    var db = {};

    var get = function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    }

    var save = function (task) {
        console.log('Saving ' + task.name + ' to the db');
    }
    
    // Returning references instead of functions defined inside, is called revealing module pattern.
    // It is like an API and can be seen easily
    return {
        get: get,
        save: save
    }


}

// Execute the function and assign it into the module.exports
module.exports = repo();