(function(){
    //Atenção pro detalhe do array no lugar da função!
    angular.module('modajax', []).config(function($httpProvider){
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        $httpProvider.defaults.headers.post['X-CSRFToken'] = DJ2.csrf_token;
    }).factory('Ajax', ['$http', function($http){
        return {
            get: function(url, params){
                if(!params){
                    params = {};
                }
                return $http({
                    method: 'GET',
                    url: url,
                    params: params
                });
            },
            post: function(url, params){
                if(!params){
                    params = {};
                }
                return $http({
                    method: 'POST',
                    url: url,
                    data: $.param(params)
                });
            }
        };
    }]);
})();

