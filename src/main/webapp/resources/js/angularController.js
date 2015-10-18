var app = angular.module('main', []);
//Application controller
app.controller('mainCtrl', function($scope, $http, $window, $filter) {
	$scope.flights = '[{"flightNumber":"9A 3803","departureDateTime":"25-12-2015 null","arrivalDateTime":"25-12-2015 null","departureStation":"ARN","arrivalStation":"LHR","price":"98500","currency":"EUR"},{"flightNumber":"9A 3916","departureDateTime":"25-12-2015 null","arrivalDateTime":"25-12-2015 null","departureStation":"ARN","arrivalStation":"LHR","price":"98500","currency":"EUR"}]';
	
	$scope.hotels = '[{"name":"Hotel Hostal Cuba","id":"229318","amount":"178.020","rating":"4 STARS","currency":"EUR","rateKey":"20160126|20160127|W|1|229318|DBT.ON|CG- MERCHANT|BB||1~1~0||N@1742411654"},{"name":"UR Palacio Avenida","id":"99655","amount":"79.990","rating":"4 STARS","currency":"EUR","rateKey":"20160126|20160127|H|1|99655|DUS.ST|CG-LIBERATE-1|BB||1~1~0||N@1742411654"},{"name":"Armadams - Mirador","id" '+
			':"135813","amount":"55.680","rating":"4 STARS","currency":"EUR","rateKey":"20160126|20160127|W|1|135813|DUS.ST|CG-ROULETTE|RO||1~1~0||N@1742411654"},{"name":"Hm Jaime III","id":"265","amount":"144.060","rating":"4 STARS","currency":"EUR","rateKey":"20160126|20160127|W|1|265|DBT.ST|CG-TODOS|BB||1~1~0||N@1742411654"'+
			'},{"name":"Palacio ca sa Galesa","id":"4304","amount":"168.630","rating":"5 STARS","currency":"EUR","rateKey":"20160126|20160127|W|1|4304|DUS.ST|CG- MERCHANT|RO||1~1~0||N@1742411654"}],"customers":null,"timeDetails":{"checkinTime":null,"checkoutTime":null}';

	var promise = $http.get("hotels");
		promise.success(function(response) {
			$scope.hotels = response.hotels;
			console.log("success"+$scope.hotels[0].name);
		})
		.error(function(response) {
			console.log("Hotels failed");
		});
		
		var promise1 = $http.get("flight/itinerary");
		promise1.success(function(response) {
			$scope.flights = response;
			console.log("success"+$scope.flights[0].flightNumber);
		})
		.error(function(response) {
			console.log("Flights failed");
		});
}); /* End of Controller */
