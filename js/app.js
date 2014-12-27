(function() {
var app = angular.module('bytecom', [ ]);

technicalStore = [{
	name: "Fabiano Sousa",
	email: "fabianosousa62@gmail.com",
	tasks : [{
		date: 1397490080837,
		description: "This gem is WAY too expensive for its rarity value.",
		type : "RECOLHIMENTO",
		status: "REPROVADO",
		createdOn: 1397490980837
	  }, {
		date: 1397400980837,
		description: "This gem is WAY too expensive for its rarity value.",
		type : "MANUTENÇÃO",
		status: "AGUARDANDO APROVAÇÃO",
		createdOn: 1397490980837
	  }, {
		date: 1097490980837,
		description: "This gem is WAY too expensive for its rarity value.",
		type : "INSTALAÇÃO",
		status: "APROVADO",
		createdOn: 1397490980837
	  }]
  }];

app.directive('taskList', function(){
	return {
		restrict : 'E',
		templateUrl : 'partial/task-list.html',
		controller: function() {
				this.technicals = technicalStore;
				
				this.task = {};
				this.addReview = function(technical){
				  this.task.createdOn = Date.now();
				  technical.tasks.push(this.task);
				  this.task = {};
				};

			},
		controllerAs : 'taskCtrl'
	};
  
});

})();
