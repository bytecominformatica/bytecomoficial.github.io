(function(){
	
	var app = angular.module('task-directives', [ ]);

	app.directive('taskList', ['$filter', "$http", function($filter, $http){
		return {
			restrict : 'E',
			templateUrl : 'partial/task-list.html',
			controller: function() {
				this.technical = {email : 1};
				this.findAll = function() {
					console.log("teste");
					$http.get("http://bytecom.herokuapp.com/services/technicals?email=fabianosousa62@gmail.com")
					.success(function(data, status, headers, config) {
					
					console.log(this.technical);
					
				  });
				}
				
				this.findAll();
				
				this.limpar = function() {
					this.task = {date : $filter('date')(Date.now(),'dd/MM/yyyy')};
				};
				
				this.limpar();
				
				this.addTask = function(){
				  console.log(this.technical);
				  if(!this.task.createdOn){
					  this.task.createdOn = Date.now();
				  }
				  if(!this.technical.tasks){
					  this.technical.tasks = [];
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

			},
			controllerAs : 'taskCtrl'
		};
	  
	}]);
	
})();
