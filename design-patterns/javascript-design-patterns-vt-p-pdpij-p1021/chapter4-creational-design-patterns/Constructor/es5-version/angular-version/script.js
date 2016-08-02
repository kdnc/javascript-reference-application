(function(){
  var app = angular.module('taskManager', []);
  
  var taskController = function(Task){
    
    var ctrl = this;
    ctrl.tasks = [];
    ctrl.tasks.push(new Task({name: 'create a demo for constructors'}));
    ctrl.tasks.push(new Task({name: 'create a demo for modules', completed: true}));
    
  };
  
  app.controller('taskCtrl', taskController)
}());