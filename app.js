var app = angular.module("app",[
	"ngRoute",
]);


app.config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/',         {templateUrl: '/views/index.html', controller: 'indexController'});
}]);


app.controller("indexController",["$scope","$http",function($scope,$http){
	console.log("index");
	$scope.test = "test";
	
	//$http.get("https://api.angel.co/1/jobs")
	
	
}]);
