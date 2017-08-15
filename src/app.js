var app = angular.module('plunker', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: angular.noop,
        template: '<h2>Home</h2>'
    })
    .when('/test', {
        controller: 'TestController',
        templateUrl: 'test.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('MainCtrl', function($scope) {

});

app.controller('TestController', function($scope, $route, $http, $templateCache) {
    $scope.loadTemplate = function() {
        
        var content = '<h2>New loaded content</h2>';
        var templateName = $route.current.templateUrl;
        
        $templateCache.put(templateName, content);
        $route.reload();
    };
});