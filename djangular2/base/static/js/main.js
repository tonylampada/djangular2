angular.module('myapp', ['ngRoute', 'modajax']);

angular.module('myapp').factory('DefaultHandler', function(){
    return {
        handleError: function(err, status){
            if(status == 401){
                alert('xi, parece que tua sessao ja elvis... ó: '+err);
            } else {
                alert('erro desconhecido: '+err+', status: '+status);
            }
        }
    }
})