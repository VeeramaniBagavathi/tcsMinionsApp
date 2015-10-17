var app = angular.module('main', []);
app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
//Application controller
app.controller('mainCtrl', function($scope, $http, $window, $filter) {
	$scope.properties = "";
	//url: "https://jsontoxmltest.herokuapp.com/rest/test",
	var promise = $http({
	            url: "rest/test/",
	            method: "GET",
	    	});
		promise.success(function(response) {
			$scope.properties = response;
			alert("success"+$scope.properties.flightNumber);
		})
		.error(function(response) {
			alert("failed");
		});
}); /* End of Controller */
