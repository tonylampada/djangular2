angular.module('myapp').controller('LoginCtrl', function($scope, Ajax){

	$scope.login = function(){
		Ajax.post('/login', {username:$scope.username, password:$scope.password}).success(function(result){
			console.log('ok');
		}).error(function(err){
			console.error('erro no login: '+err);
		});
	};

});