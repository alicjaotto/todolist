var angular = require('angular');

	angular.module('app')
		.directive('locationAndTemp', function() {
			'use strict';
			return {
				restrict: 'E',
				transclude: true,
				templateUrl: '/locationAndTemp/locationAndTemp.html',
				controller: locationAndTempController
			};
		});

		function locationAndTempController($scope, $http) {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var lat = position.coords.latitude;
					var lon = position.coords.longitude;
					getWeather(lat, lon);
				});
			} else {
				var locationError = document.getElementById('location-error');
				var message = document.createTextNode('This browser does not support geolocation');
				locationError.appendChild(message);
			}

//move to separate service
			function getWeather(lat, lon) {
				$http.get('https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + lat + '&lon=' + lon + '&APPID=8f5da5a3c95b945d1b9119efc8bb164b')
					.then(function(data){
						var weatherData = JSON.parse(JSON.stringify(data.data));
						$scope.location = weatherData.name;
						$scope.temp = Math.round((weatherData.main.temp - 32) / 1.8);
					}, (function(err){
						console.log('Error retrieving weather data');
					}));
			}
		}
