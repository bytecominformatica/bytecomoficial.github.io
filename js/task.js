(function(){
	
	var app = angular.module('task-directives', [ ]);


	app.directive('taskList', ['$filter', function($filter){
		return {
			restrict : 'E',
			templateUrl : 'partial/task-list.html',
			controller: function() {
					this.technical = technicalStore;
					
					this.task = {};
					this.task.date = $filter('date')(Date.now(),'dd/MM/yyyy');
					this.addTask = function(){
					  this.task.createdOn = Date.now();
					  this.technical.tasks.push(this.task);
					  this.task = {date : Date.now()};
					};
					
					this.editTask = function(task) {
						this.task = task;
						this.task.date = $filter('date')(this.task.date,'dd/MM/yyyy');
					};
					
					this.removeTask = function(task) {
						this.technical.tasks.pop(task);
					}

				},
			controllerAs : 'taskCtrl'
		};
	  
	}]);
	
})();
