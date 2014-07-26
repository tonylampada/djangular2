angular.module('myapp').controller('LoginCtrl', function($scope, Ajax){

	$scope.login = function(){
		Ajax.post('/login', {username:$scope.username, password:$scope.password}).success(function(result){
			console.log('ok');
		}).error(function(err){
			console.error('erro no login: '+err);
		});
	};

    $scope.vai_baba = function(){
		Ajax.get('/baba', {jujuba: 'morango'}).success(function(result){
			console.log('baba_ok');
		}).error(function(err){
			console.error('erro no baba: '+err);
		});
    };

    $scope.vai_bibi = function(){
		Ajax.post('/bibi', {chocolate: 'meio amargo'}).success(function(result){
			console.log('bibi_ok');
		}).error(function(err){
			console.error('erro no bibi: '+err);
		});
    };

});