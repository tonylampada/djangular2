angular.module('myapp').controller('LoginCtrl', function($scope, Ajax, DefaultHandler){

	$scope.login = function(){
		Ajax.post('/login', {username:$scope.username, password:$scope.password}).success(function(result){
			console.log('entrou');
		}).error(DefaultHandler.handleError);
	};

	$scope.logout = function(){
		Ajax.post('/logout').success(function(result, status, headers){
			console.log('Saiu');
		}).error(DefaultHandler.handleError);
	};

    $scope.vai_baba = function(){
		Ajax.get('/baba', {jujuba: 'morango'}).success(function(result){
			console.log('baba_ok');
		}).error(DefaultHandler.handleError);
    };

    $scope.vai_bibi = function(){
		Ajax.post('/bibi', {chocolate: 'meio amargo'}).success(function(result){
			console.log('bibi_ok');
		}).error(DefaultHandler.handleError);
    };

});