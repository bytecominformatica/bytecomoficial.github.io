(function(){
	
	var app = angular.module('task-directives', [ ]);


	app.directive('taskList', ['$filter', "$http", function($filter, $http){
		return {
			restrict : 'E',
			templateUrl : 'partial/task-list.html',
			controller: function() {
					this.limpar = function() {
						this.task = {date : $filter('date')(Date.now(),'dd/MM/yyyy')};
					};
					
					this.limpar();
					
					this.addTask = function(){
					  if(!this.task.createdOn){
						  this.task.createdOn = Date.now();
					  }
					  this.task.updatedOn = Date.now();
					  this.task.status = "AGUARDANDO APROVAÇÃO";
					  this.technical.tasks.push(this.task);
					  this.limpar();
					};
					
					this.editTask = function(task) {
						this.task = task;
						this.task.date = $filter('date')(this.task.date,'dd/MM/yyyy');
					};
					
					this.removeTask = function(task) {
						this.technical.tasks.pop(task);
					}
					
					this.findAll = function($http) {
						$http.post("https://bytecom.herokuapp.com/services/technicals?email=fabianosousa62@gmail.com")
						.success(function(response) {
							this.technical = response;
						});
					}
					
					this.findAll($http);

				},
			controllerAs : 'taskCtrl'
		};
	  
	}]);
	
})();
