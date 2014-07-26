angular.module('myapp').controller('LoginCtrl', function($scope, Ajax, $cookies){

	$scope.login = function(){
		Ajax.post('/login', {username:$scope.username, password:$scope.password}).success(function(result){
			console.log('entrou');
		}).error(function(err, status){
			console.error('erro no login: '+err+", "+status);
		});
	};

	$scope.logout = function(){
		Ajax.post('/logout').success(function(result, status, headers){
			console.log('Saiu');
		}).error(function(err, status){
			console.error('erro no logout: '+err+", "+status);
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