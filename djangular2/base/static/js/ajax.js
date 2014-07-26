(function(){
    //Atenção pro detalhe do array no lugar da função!
    angular.module('modajax', ['ngCookies'])

    angular.module('modajax').config(function($httpProvider){
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    });

    angular.module('modajax').factory('Ajax', ['$http', '$cookies', function($http, $cookies){
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
                $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
                return $http({
                    method: 'POST',
                    url: url,
                    data: $.param(params)
                });
            }
        };
    }]);
})();

