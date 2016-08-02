(function() {
  var app = angular.module('taskManager');

// Module pattern - Return the methods you want to expose to world
// Usually module pattern is used when you need one of something, like a DBService
  var taskRepo = function($http) {
    var called = 0;
    var db = {};

    var get = function(id) {
      called++;
      console.log('Getting task ' + id + ' called ' + called + ' times.');
      return {
        name: 'task ' + id
      }
    }

    var save = function(task) {
      called++;
      console.log('Saving ' + task.name + ' to the db'+ ' called ' + called + ' times.');
    }

    // Returning references instead of functions defined inside, is called revealing module pattern.
    // It is like an API and can be seen easily
    return {
      get: get,
      save: save
    }

  }
  app.service('TaskRepository', taskRepo);

}())