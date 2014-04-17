var app = angular.module("app",[
	"ngRoute",
]);


app.config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/',         {templateUrl: '/views/index.html', controller: 'indexController'});
}]);


app.controller("indexController",["$scope","$http",function($scope,$http){	
	
	$scope.waiting = true;
	$scope.page = 1;
	$scope.total = 51;
	$scope.jobs = [];
	
	var getJobs = function(page,done){
		var url = "https://api.angel.co/1/jobs?page="+page+"&callback=JSON_CALLBACK";
		$http.jsonp(url).success(function(data){
			done(data["jobs"]);
		});
	}
	
	for(var p=1; p < $scope.total; p++){
		getJobs(p,function(jobs){
			$scope.jobs  = $scope.jobs.concat(jobs);
			$scope.page += 1;
		});
	}
	

}]);
