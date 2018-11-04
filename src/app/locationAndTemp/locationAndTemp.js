(function(angular) {
	'use strict';

	angular.module('app')
		.directive('locationAndTemp', function() {
			return {
				restrict: 'E',
				transclude: true,
				templateUrl: '/src/app/locationAndTemp/locationAndTemp.html',
				controller: locationAndTempController
			};
		});

		function locationAndTempController($scope, $http) {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					$scope.$apply(function(position){
						var lat = position.coords.latitude;
						var lon = position.coords.longitude;
						getWeather(lat, lon);
					});
				});
			} else {
				console.log('Geolocation is not supported by this browser');
			}

			function getWeather(lat, lon) {
				$http.get('https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + lat + '&lon=' + lon + '&APPID=8f5da5a3c95b945d1b9119efc8bb164b')
					.success(function(data){
						var weatherData = JSON.parse(JSON.stringify(data));
						$scope.location = weatherData.name;
						$scope.temp = Math.round(weatherData.main.temp)
					})
					.error(function(err){
						console.log('Error retrieving markets');
					});
			}
		}
})(window.angular);
