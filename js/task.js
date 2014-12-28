(function(){
	
	var app = angular.module('task-directives', [ ]);


	app.directive('taskList', function(){
		return {
			restrict : 'E',
			templateUrl : 'partial/task-list.html',
			controller: function() {
					this.technical = technicalStore;
					
					this.task = {};
					this.addTask = function(){
					  this.task.createdOn = Date.now();
					  this.technical.tasks.push(this.task);
					  this.task = {};
					};
					
					this.editTask = function(task) {
						this.task = task;
					};
					
					this.removeTask = function(task) {
						this.technical.tasks.pop(task);
					}

				},
			controllerAs : 'taskCtrl'
		};
	  
	});
	
})();
